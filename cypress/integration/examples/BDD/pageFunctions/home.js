const HomeObject = require("../pageObjects/homePage");
import 'cypress-iframe'


class Home extends HomeObject {

    clickAndValidateCheckbox() {
        // check() and uncheck() functions are applicable to radio buttons as well

        this.carCheckboxes.eq(0).check().should('be.checked')
        this.carCheckboxes.eq(0).uncheck().should('not.be.checked')
    }

    clickAndValidateDropdown() {
        // <option value="benz">Benz</option> - here its supports both value and attribute value for selecting
        this.dropdown.select("benz").should("have.value", "benz")

        // Multiselect dropdown
        this.multipleDropdown
            .select(['apple', 'orange'])
            .invoke('val')
            .should('deep.equal', ['apple', 'orange'])
    }

    webelementsValidation(homeData) {
        const cars = homeData.cars
        this.carCheckboxes.each((element, index, list) => {

            // Wrap using cypress and click by each element 
            cy.wrap(element).click();

            // Print the attribute value using Jquery and Cypress
            cy.log(`Jquery attribute retrieval - ` + element.attr("value"))
            cy.wrap(element).invoke('attr', 'value').then((attr) => cy.log("Cypress Text retrieval - " + attr))
            cy.document().then((doc) => {
                cy.log(`Query selector - ` + doc.querySelector(`#checkbox-example-div > fieldset input`).namespaceURI)
            })

            // Print the  text using Jquery and Cypress
            this.carLabel.find("label").eq(index).invoke('text').then((text) => cy.log("Cypress Text retrieval - " + text))
            cy.log("Jquery Text retrieval - " + Cypress.$(`#checkbox-example-div > fieldset label:nth-of-type(${index + 1})`).text());

            // Validate each element by attribute
            cy.wrap(element).invoke('attr', 'value').should('include', homeData.cars[index].toLowerCase().trim())

            // Validate each element by value
            // find - find the decendant of the selector
            // eq - Get A DOM element at a specific index in an array of elements.
            this.carLabel.find("label").eq(index).invoke('text').then((text) => {
                expect(text.toLowerCase().trim()).to.include(cars[index].toLowerCase().trim())

                //Set alias
                cy.wrap(text.toLowerCase().trim()).as('mytext')
            })

            // list parameter validation
            expect(list).to.have.length(3)

            // implement the defined alias
            cy.get('@mytext').then(txt => {
                expect(txt.length > 0).to.be.true
            })
        });
        console.log("hello");
    }

    handleAlert() {
        this.alertBtn1.click();
        //event 1 triggered
        cy.on('window:alert', (txt) =>{
            expect(txt).to.equal("Hello , share this practice page and share your knowledge")
        })
        this.alertBtn2.click();

        //event 2 triggered
        cy.on('window:confirm', (txt1) =>{
            expect(txt1).to.equal("Hello , Are you sure you want to confirm?")
        })
    }

    navigateToSubdomain() {
        cy.url().then(url => cy.log(url)
            )
        cy.pause();
        cy.visit('/') // navigate to base URL
        cy.pause();
        cy.visit('register')
        cy.pause();
    }

    handleChildTab() {
        // this.clickSwitchTabBtn.invoke("removeAttr","target").click()
        // (or)

        cy.document().then((doc) => {
            doc.querySelector("#opentab").removeAttribute("target")
            doc.querySelector("#opentab").click();
        })

        cy.go("back")
    }

    handleMouseControls() {
        // invoke jquery show function to list the hover options
        cy.get('.mouse-hover-content').invoke('show')
        cy.contains('Reload').click();
        cy.pause();

        // or click by force
        cy.contains('Reload').click({force : true})
        cy.pause();
    
    }

    handleIframe() {
        cy.frameLoaded("#courses-iframe")
        cy.iframe().find("[placeholder='Search Course']").type("Hello tester")
        // note: screenshot will not be taken in test runner report
    }


    handleCommandFunction(columnName) {
        cy.ValidateTableColumnText(columnName)
    }

}
module.exports = new Home();