class Homepage {
    getsearchbox() {
        return cy.get("input[type='search']")
    }
    getproducts() {
        return cy.get('.product:visible')
    }

    getproductnames() {
        return cy.get('h4.product-name')
    }

    getCartButton() {
        return cy.get('.cart-icon > img')
    }
    getproceeedtocheckout()
    {
        return cy.contains("PROCEED TO CHECKOUT")
    }

    

}
export default Homepage;