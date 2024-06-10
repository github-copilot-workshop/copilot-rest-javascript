const request = require('supertest');
const app = require('../app');

let server;

beforeAll(() => {
    server = app.listen(3000);
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
