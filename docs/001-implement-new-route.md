
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

To start the server run:

```bash
npm start
```

or the following command if you want to use [nodemon](https://www.npmjs.com/package/nodemon) to restart the server when the code changes:
  
```bash
 nodemon
```

## 001 Add a new route "Hello World"

`http://localhost:3000/hello?key=World` 

should return the JSON 

`{"message": "Hello World"}`

and should return a `HTTP 500` code when the query parameter `key` is not present.

<details>

<summary>Possible Flow</summary>

1. Open the file `./api/api.js`

2. Add a new route to the file using a simple comment for example

```javascript
// Create a new route GET /hello?key=World
// that returns a JSON {"message": "Hello World"} when the query parameter key is present
// and return HTTP 500 code with message "key query parameter is required"
// when the query parameter key is not present
```


3. Let the code be generated from the comment

> Note: it is true that the comment is longer that the code, but this is done to learn how to use copilot and understand the importance of being precise in the "prompt".

</details>

---
