

let productName
// injecting jwt session token into browser local storage and read csv file

describe('login ByPass suit', () => {
    it.only('login bypass  using local storage', () => {
        cy.LoginAPI().then(function () {
            cy.visit("https://rahulshettyacademy.com/client",
                {
                    onBeforeLoad: function (window) {
                        window.localStorage.setItem('token', Cypress.env('token'))
                    }

                })

        })
        cy.get(".card-body b").eq(1).then(function (ele) {
            productName = ele.text();
        })
        cy.get(".card-body button:last-of-type").eq(1).click();
        //
        cy.get("[routerlink*='cart']").click();
        cy.contains("Checkout").click();
        cy.get("[placeholder*='Country']").type("ind")
        cy.get('.ta-results button').each(($e1, index, $list) => {

            if ($e1.text() === " India") {
                cy.wrap($e1).click()
            }
        })
        cy.get(".action__submit").click();
        cy.wait(4000)
        cy.contains("Click To Download Order Details in Excel").click();
        const filepath = Cypress.config("fileServerFolder") + "/cypress/downloads/order-invoice_dattatrayfugare77.xlsx"
        cy.task('excelToJsonconverter', filepath).then(function (result) {
            cy.log(result);
            cy.log(result.data[1].A);
            expect(productName).to.equal(result.data[1].B)
        })
              cy.readFile(filepath).then(function(text){
                // cy.readFile just check text present or not.
                expect(text).to.include("datta")
              })


    });
})