const request = require('supertest');
const app = require('../app');

let server;

beforeAll(() => {
    server = app.listen(3001);
});

afterAll(() => {
    server.close();
});

describe('GET /api/time', () => {
    it('should return the current time', async () => {
        const response = await request(app).get('/api/time');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('time');
        expect(typeof response.body.time).toBe('string');
    });
});

describe('GET /api/hello', () => {

    it('should return Hello World', async () => {
        const response = await request(app).get('/api/hello?key=World');
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('Hello World');
    });

    // no key
    it('should return HTTP 500 code with message "key query parameter is required"', async () => {
        const response = await request(app).get('/api/hello');
        expect(response.status).toBe(500);
        expect(response.body).toHaveProperty('message');
        expect(response.body.message).toBe('key query parameter is required');
    });

});


describe('GET /api/vms', () => {
    it('should return the list of VMs with correct properties', async () => {
        const response = await request(app).get('/api/vms');
        expect(response.status).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
        expect(response.body.length).toBeGreaterThan(0);
        response.body.forEach(vm => {
            expect(vm).toHaveProperty('size');
            expect(vm).toHaveProperty('vcpu');
            expect(vm).toHaveProperty('memory');
            expect(typeof vm.size).toBe('string');
            expect(typeof vm.vcpu).toBe('number');
            expect(typeof vm.memory).toBe('number');
        });
    });

    it('should include VM with size "Standard_D2_v31" and 2 vCPUs', async () => {
        const response = await request(app).get('/api/vms');
        expect(response.status).toBe(200);
        const hasD2v31 = response.body.some(vm => vm.size === "Standard_D2_v31" && vm.vcpu === 2);
        expect(hasD2v31).toBe(true);
    });

    it('should include VM with size "Standard_D64_v3" and 256 GB memory', async () => {
        const response = await request(app).get('/api/vms');
        expect(response.status).toBe(200);
        const hasD64v3 = response.body.some(vm => vm.size === "Standard_D64_v3" && vm.memory === 256);
        expect(hasD64v3).toBe(true);
    });
});

