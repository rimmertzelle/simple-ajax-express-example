# Simple setup for creating dynamic websites

This is my simple setup for creating simple dynamic websites or simple microservices. In this setup I included a view engine. However, you can delete this reference and use this setup for creating a simple Microservice as well. 

To use this repo, take the following steps.
1. Clone this repo into a folder
2. Run `npm install`
3. Run `npm run dev` to start the server
4. Open the ip-address in your browser

There is one catch. Nodemon is being used for running (and restarting) the server. The `npm run dev` command only works on a Mac and nodemon locally installed.

# View (optional)
Pug is being used as a view engine. This is optional. If you want to create a microservice you can delete the views folder and the referring code in the controller and index.js file(s). At first Pug is a bit difficult to understand and the documentation is not that great. On the pug [documentation page](https://pugjs.org/api/getting-started.html) use the sidebar to navigate to the language reference. You can find all the references to the HTML

# Adapters (optional)
In order to store data external services are being used. For each service ad adapter is created to communicate with the service. Credentials for each service is stored in a variablese.env file. An example is added.

## Supabase - adapter

## Sooglesheets - adapter

# eslint
An simple eslint setup is there for

## Variables env

# Folder structure

Src
Public

# Request and response.
Interestingly enough a request is being fired
https://www.freecodecamp.org/news/what-is-node-js/
https://www.freecodecamp.org/news/the-express-handbook/


# Client server

# Tailwind CSS

TODO: 
- delete eslint and solve the high vulnarabilities
- come up with a nice way to talk to supabase including a supabase model(s) and connection. Maybe use composition here.
- object destructering techniques