const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/integration/examples/BDD/*.feature",
    baseUrl : "https://courses.letskodeit.com"
  }, 
  
  projectId: "eftuni",
  retries: {
    runMode: 1,
    openMode : 1
    },
  "env": {
    app1 : "https://parabank.parasoft.com/parabank/index.htm",
    app2 : "https://courses.letskodeit.com/practice"
},
    defaultCommandTimeout: 10000,
    
      "experimentalSessionAndOrigin": true,
    
});
