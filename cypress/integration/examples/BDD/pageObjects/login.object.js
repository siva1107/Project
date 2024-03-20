class LoginObject
{
    get username()
    {
        return cy.get("input[name='username']")
    }
    get password()
    {
        return cy.get("input[name='password']")
    }
    get loginBtn()
    {
        return cy.get("input[value='Log In']")
    }
    get usernameLabel()
    {
        return cy.get(':nth-child(1) > b')
    }
}
module.exports = LoginObject;