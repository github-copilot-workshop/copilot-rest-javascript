# Express Application Documentation

This documentation provides an overview of the Express application, including new API routes, generating sample data, and updating the homepage. Follow the steps outlined in each section to enhance the application's functionality.

## New API Routes

We've added new routes to the application, including a "Hello World" route and a route to list Microsoft Azure VMs information. For more details on implementing these routes and their corresponding tests, refer to the following documents:

- [New API Routes](001-implement-new-route.md): Learn how to add a new "Hello World" route and its tests.
- [Generate Sample Data](002-data-and-services.md): Instructions on creating a new API that lists Microsoft Azure VMs information, including generating sample data and adding tests for the new API.

## Updating the Homepage

The homepage has been updated to display a list of VMs. This involves updating the `index.ejs` file to use Bootstrap style and call the VM REST API defined in `api.js` and `vms.json`. For a detailed guide on updating the homepage, see:

- [Update the Homepage](003-update-the-homepage.md): Steps to create a home page that shows the list of VMs with a Bootstrap-styled HTML table.

## Getting Started

Before starting with the exercises, make sure to install the necessary dependencies by running:

```bash
npm install
```

To test the application, ensure the server is not running and execute:

```
npm test
```

For any issues or further clarification, refer to the detailed steps in the linked documents or consult the final solution in the solutions branch: [Solutions Branch](https://github.com/github-copilot-workshop/copilot-rest-javascript/tree/solutions).