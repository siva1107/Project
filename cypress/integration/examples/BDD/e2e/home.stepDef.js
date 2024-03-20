import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import home from "../pageFunctions/home.js"
let homedata1;

before(function () {
    cy.fixture('app2').then((data) => {
        homedata1 = data
    })
    cy.log("---------------------------------inside before each----------------------------------------------------")
})

Given(/^I navigate to app2$/, () => {
    cy.visit(Cypress.env('app2'));
})


Then(`I validate all webelements in cars`, () => {
    home.webelementsValidation(homedata1);
})

Then(`I validate checkbox is checked and unchecked`, () => {
    home.clickAndValidateCheckbox();
})

Then(`I validate the dropdown`, () => {
    home.clickAndValidateDropdown();
})

Then(`I click and validate the Alert boxes`, () => {
    home.handleAlert();
})

Then(`I navigate to subdomain url`, () => {
    home.navigateToSubdomain();
})

Then(`I handle child tab`, () => {
    home.handleChildTab();
})

Then(`I handle mouse controls`, () => {
    home.handleMouseControls();
})

Then(`I handle Iframe`, () => {
    home.handleIframe();
})

Then(/^I validate command function webtable column (.*)$/, (columnName) => {
    home.handleCommandFunction(columnName)
  })

