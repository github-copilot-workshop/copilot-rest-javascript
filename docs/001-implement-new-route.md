
# New API Routes

> Make sure you run 
>
> `npm install`
>
> before starting this exercise.

The project is a [Express](https://expressjs.com/) application. This project contains multiple route files one of them `./api/api.js`. 

This file will contains the new routes that will be implemented.

The current route return the current Date Time as JSON, for example open a terminal and run:

```bash
curl http://localhost:3000/api/time
```

This should return the current date time in JSON format.

## 001 Add a new route "Hello World"

`http://localhost:3000/hello?key=World` should return the JSON `{"message": "Hello World"}`

and should return a `HTTP 500` code when the query parameter `hello` is not present.

<details>

<summary>Possible Flow</summary>

1. Open the file `./api/api.js`

2. Add a new route to the file using a simple comment for example

```javascript
// Create a new route GET /hello?key=World
// that returns a JSON {"message": "Hello World"} when the query parameter key is present
// and return HTTP 501 code with message "key query parameter is required"
// when the query parameter key is not present
```


3. Let the code be generated from the comment

> Note: it is true that the comment is longer that the code, but this is done to learn how to use copilot and understand the importance of being precise in the "prompt".

</details>

---

## 002 Finish the tests

Make sure that your server is not running, and open a terminal and run:

```bash
npm test
```

As you can see the tests are failing with the following :

```
 ● GET /api/hello › should return Hello World

    expect(received).toBe(expected) // Object.is equality

    Expected: 200
    Received: 404
```

The tests are located in the file `__tests__/app.spec.js`, use GitHub Copilot in your IDE to fix this.

<details>

<summary>Possible Flow</summary>

1. Keep the file `./api/api.js` opened in the IDE, since GitHub Copilot is using opened file to create a context/prompt.

2. Open the file `__tests__/app.spec.js`

3. Add a comment or use the inline chat (CTRL+i) to ask Copilot to start and stop the application before and after running the tests.

```javascript
start the application before running the tests
and
stop the application after running the tests
```


3. Let the code be generated from the comment

> Note: it is true that the comment is longer that the code, but this is done to learn how to use copilot and understand the importance of being precise in the "prompt".

</details>

---

## 002 Add new test for the new route

Add a new test to the file `__tests__/app.spec.js` that test the new route `GET /countries`

The test should validate that the route returns a JSON Array with multiple entries with the first one being:

```json
{"country":"China","population":1412600000}
``` 

<details>

<summary>Possible Flow</summary>

1. Open the file `__tests__/app.spec.js`

2. Add a comment or use the inline chat (CTRL+i) to ask Copilot to:

  - add a new test for the route `GET /api/countries`
  - that should return a JSON Array with multiple entries
  - the first entry should be `{"country":"China","population":1412600000}`
