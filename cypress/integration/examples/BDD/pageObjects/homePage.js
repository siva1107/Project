class HomeObject {

get carCheckboxes()
{
    return cy.get(`#checkbox-example-div > fieldset input`)
}

get carLabel()
{
    return cy.get("#checkbox-example-div > fieldset")
}

get dropdown()
{
    return cy.get("#carselect")
}

get multipleDropdown()
{
    return cy.get("#multiple-select-example")
}

get alertBtn1()
{
    return cy.get("#alertbtn")
}

get alertBtn2()
{
    return cy.get("#confirmbtn")
}

get clickSwitchTabBtn()
{
    return cy.get("#opentab")
}
}
module.exports = HomeObject;