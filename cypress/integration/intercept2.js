// intercepting request 
describe('test intercept', () => {
    // code here
    it('Test intercept', () => {
        // code here
        cy.visit('https://rahulshettyacademy.com/angularAppdemo/');

        cy.intercept("GET","https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty",
            (req)=>
                {
                req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=malhotra",

            req.continue((resp)=>{
                expect(resp.statusCode).to.equal(200)
                // it gives statuscode 200 insted of 430 . this is bug
            })
        }
        ).as('mycall')
        cy.get('.btn.btn-primary').click()
        cy.wait('@mycall');
    });
})