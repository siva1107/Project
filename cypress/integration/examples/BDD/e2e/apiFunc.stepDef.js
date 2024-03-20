import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

When(/^I get the employee details$/, () => {

    cy.request('GET', "https://dummy.restapiexample.com/api/v1/employees").then((response) => {
        cy.log(response.body)
        expect(response.status).to.equal(200)
        expect(response.body.data[1].employee_name).to.include("Garrett");
        Cypress.env('emp_id', response.body.data[1].id)
    })
})

When(/^I get the employee details by id$/, () => {
    cy.request('GET', `https://dummy.restapiexample.com/api/v1/employee/${Cypress.env('emp_id')}`).then((response) => {
        cy.log(response.body)
        expect(response.body.data.employee_age).to.equal(63);
    })
})

When(/^I post the employee details$/, () => {
    cy.request('POST', "https://reqres.in/api/users",
    {
        "name": "mytest",
        "job": "tester"
    }
    ).then((response) => {
        expect(response.status).to.equal(201)
        cy.log(response.body)
    })
})

When(/^I update the employee details$/, () => {
    cy.request('PUT', "https://reqres.in/api/users/2",
    {
        "name": "mytest",
        "job": "developer"
    }
    ).then((response) => {
        expect(response.status).to.equal(200)
        cy.log(response.body)
    })
})