const LoginObject = require("../pageObjects/login.object");

class Login extends LoginObject {
    loginToBank(logindata) {
        this.username.type(logindata.userName);
        this.password.type(logindata.password);
        this.loginBtn.click();
    }

    assertionsValidation() {
        // when validating behaviour  - should(be.)
        // when validating property  - should(have.)
        const label = this.usernameLabel.invoke('text')
        // Cypress implicit assertion
        this.usernameLabel
            .should('be.visible')

        // chanining assertions
        this.usernameLabel
            .should('have.text', "Username")
            .should('have.length', 1)
            .should('have.css', 'color', 'rgb(95, 122, 119)')

        this.usernameLabel.invoke('text').then((txt) => {

            expect(txt.trim()).to.equal('Username');
            expect(txt.trim()).to.include("User");
            expect(txt.length).to.equal(8);
        })
    }

    asyncNature() {
        cy.pause();
        // Check the output in browser console - "hello im js 1" message will be displayed before 1st pause
        console.log("hello im js 1")

        // how to resolve promise
        // "hello im js 2" message will be displayed only after 2nd pause
        cy.pause().then(() => {
        console.log("hello im js 2")
        })
    }
}
module.exports = new Login();