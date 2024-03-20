import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";
import Login from "../pageFunctions/login.js"
let logindata1;
beforeEach(() => {
  cy.fixture('app1').then((data) =>{
    logindata1 = data;
  })  
})

When(`I validate credentials label`, () => {
  Login.assertionsValidation();
  })
  
Given(`I login to bank`, () => {
  Login.loginToBank(logindata1);
  })

Then(`I validate async nature of cypress`, () => {
  Login.asyncNature(logindata1);
    })

Given(/^I navigate to app1$/, () => {
  cy.visit("/");
  cy.pause();
  })




