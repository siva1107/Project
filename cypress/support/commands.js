// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('ValidateTableColumnText', (columnName) => {
    let colIndex;
    
    //Webtable validation
    cy.get("#product tr:nth-child(1)").find("th").each((element, index, list) => {
        if(element.text().includes(columnName)) colIndex = (index + 1).toString(); 
        cy.wrap(colIndex).as("myColumnIndex")

    //    method 1: Use colIndex directly
        if(colIndex)
        {
            cy.get(`#product td:nth-child(${colIndex})`).each((element, index, list) => {
                // cy.log(element.text())
                // cy.pause();
                // Verify all the string in column are alphabet
                expect(/^[1-9 ]+$/.test(element.text())).to.be.true
            })
            return;
        }
    })
 // method 2: use colIndex using then 

//     .then(() => {
//     cy.get(`#product td:nth-child(${colIndex})`).each((element, index, list) => {
//         cy.log(element.text())
//         cy.pause();
//         // Verify all the string in column are alphabet
//         expect(/^[a-zA-Z ]+$/.test(element.text())).to.be.true
//     })
//  } )

  // method 3: using colIndex using Alias 
  // cy.get("@myColumnIndex").then((txt) =>{
  //   cy.get(`#product td:nth-child(${txt})`).each((element, index, list) => {
  //       // cy.log(element.text())
  //       // cy.pause();
  //       // Verify all the string in column are alphabet
  //       expect(/^[a-zA-Z ]+$/.test(element.text())).to.be.true
  //   })
  // })
})