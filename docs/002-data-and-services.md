# Generate Sample Data 

In this lab you will learn how to use Copilot to generate sample data for your application.


001 Create a new API that returns country and its population

Add a new route `http://localhost:3000/api/countires` that returns a list of countries and their population.


when calling:

```bash
curl http://localhost:3000/api/countires
```

it should return a list of countries and their population in JSON format, a follow  example of the expected output:

```json
[
   ...
  {
    "country": "France",
    "population": 68410000	
  },
  ....
  {
    "country": "Nigeria",
    "population": 206139589
  }
]
```

You can find the information on this [Wikipedia page](https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_population)


<details>

<summary>Possible Flow</summary>

1. Generates data from the Wikipedia page:
   - Open the [Wikipedia page](https://en.wikipedia.org/wiki/List_of_countries_and_dependencies_by_population)
   - Select the top 20/30 rows and copy the data (CTRC + C)
   - Open GitHub Copilot Chat

2. Ask the following question:
   - Create a new JSON file with the following content using country name and population
   - Copy the content in the chat and run

   This should generate a JSON Array

3. Click in the [...] button in the chat and select "Insert into New File" 
4. Create a data.json file in ./data/countries.json
6. Open the file `./api/api.js`
7. And using the chat create a new route and add it to the file, for example :



```javascript
   

