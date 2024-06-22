class placeOrder{

    getplaceorderbtn()
    {
        return  cy.contains('Place Order')
    }
    getcountryoption()
    {
        return cy.get('select')
    }
    getAgreebtn()
    {
        return cy.get('.chkAgree')
    }
    getproceedbtn()
    {
        return cy.contains("Proceed")
    }
}

export default placeOrder;