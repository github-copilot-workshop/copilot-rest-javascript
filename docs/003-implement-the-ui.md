# Implement the UI

In this chapter, we will implement the UI for our application that will display the list of countries. The UI will be a simple HTML page with a table that shows the country name and its capital.

## 001 - Implementing the UI

Modify the `./views/index.ejs` file to display the list of countries in a table format. The table should have two columns: one for the country name and the other the population with a human-readable format.

<details>

<summary>Possible Flow</summary>

1. Open the file `./views/index.ejs`

2. Using Inline Copilot Chat ask the following question

    > @workspace in the file #file:index.ejs  :
    > - using boostrap and associated css and JS
    > - call the /api/countries REST API that return an array of countries as followed 
    > [
    >   {
    >     "country": "China",
    >     "population": 1412600000
    >   },
    >   {
    >     "country": "India",
    >     "population": 1380000000
    >   },
    >   ..
    > 
    >   - Call this API and show the list of countries using properly formatted population number in Millions for example 139000 shoul dbe 1.4M 
    > - use an HTML table to display the data, with alternating row colors


