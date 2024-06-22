describe('test intercept', () => {
    // code here
    it('Test intercept', () => {
        // code here
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

        cy.intercept("GET","https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
            {
            statusCode: 200,
            body: [
                {
                    "book_name": "RestAssured with Java",
                    "isbn": "BSG",
                    "aisle": "2302"
                }]
        }).as('booksretrivals')
                cy.get('.btn.btn-primary').click()
                cy.wait('@booksretrivals');
                cy.get('p').should('have.text','Oops only 1 Book available')
    });
})