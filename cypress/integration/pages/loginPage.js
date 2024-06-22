class loginPage
{
    getusernameField()
    {
        return cy.get('input#username')
    }
    getuserpassFiled()
    {
       return cy.get('input#password')
    }
    getAdminRadioBtn()
    {
       return cy.get("input[value='admin']")
    }

    getdropdown()
    {
        return cy.get('select.form-control')
    }
    getAgreecheckbox()
    {
        return cy.get('input#terms')
    }
    getsigninBtn()
    {
        return cy.get('input#signInBtn')
    }

    getbarndName()
    {
        return cy.get('.navbar > .navbar-brand')
    }
    getunscussefulmsg()
    {
        return cy.get('div.alert ')
    }
}

export default loginPage