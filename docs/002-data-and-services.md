# Generate Sample Data 

In this lab you will learn how to use Copilot to generate sample data for your application.


## 001 Create a new API that list Microsoft Azure VMs informations

Add a new route `http://localhost:3000/api/vms` that returns a list of VMs with some properties, that will come from a local JSON file.


when calling:

```bash
curl http://localhost:3000/api/vms
```

The API should return a list of VMs with the following properties:

```json
[
   ...
  {
    "size": "Standard_D32_v3",
    "vcpu": 32,
    "memory": 128,
  },
  ....
  {
    "size": "Standard_D64_v3",
    "vcpu": 64,
    "memory": 256,
  }
]
```


You can find the VMs properties here https://learn.microsoft.com/en-us/azure/virtual-machines/dv3-dsv3-series?source=recommendations 

> Tip: see how you can format the data in the chat using a simple copy/paste from the website.


<details>

<summary>Possible Flow</summary>

1. Generate the data from the website
  - Go to https://learn.microsoft.com/en-us/azure/virtual-machines/dv3-dsv3-series?source=recommendations
  - Copy the data from the table

2. Ask the following question in the chat
   - _Using the following data, create a JSON Array, with the fields Size, vCPU and Memory. Put the field name in lowercase. The Memory field should be a number without unit (since the default is GiB_
   - Paste the content from Wikipedia in the chat
   - This should generate a new JSON array

   
3. Click in the [...] button in the chat and select "Insert into New File" 

4. Create a the file : `./data/vms.json`

6. Open the file `./routes/api.js` and add the following code
    - _Create a new GET route that read the `../data/vms.json` file and return the JSON content_


   

9. Restart the server and go to the browser and access the URL `http://localhost:8000/api/vms/`

10. If have an error, if you have an error, go in the terminal select the error message and do:
    
    - right-click > `Copilot : Explain this`

11. When Fixed restart the server and test the API again

</details>


## 002 Add a test for the new API

Add new tests for the new API that list Microsoft Azure VMs informations.

<details>

<summary>Possible Flow</summary>

1. Open the file `$PROJECT_HOME/copilot/tests.py` and add the following code

    - Use the inline completion to write a new test
    - Something like :

      ```javascript
      describe('GET /api/vms', () => {
          it('should return the list of VMs', async () => {
              const response = await request(app).get('/api/vms');
              expect(response.status).toBe(200);
              expect(response.body).toBeInstanceOf(Array);
          });
      });      
      ```


2. Go in the Chat, and ask the following question to test some values

    - Ask the following question using the `#file` command :
      - _Add some tests in #file:app.spec.js that validates the API based on the data found in #file:vms.json_

    - The test should look like :

      ```javascript
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
      ```


</details>