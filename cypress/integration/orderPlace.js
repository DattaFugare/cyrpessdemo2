import Homepage from "./pages/homePage";
import placeOrder from "./pages/PlaceOrderpage"
import countryPage from "./pages/countryPage";
import thankPage from "./pages/thankPage";
const Hpage = new Homepage()
const porder = new placeOrder()
const Cpage = new countryPage()
const thankpage = new thankPage()

describe('homepage suit', () => {
   // code here
   let pData;
   before(function () {
      cy.fixture('example').then(function (data) {
         pData = data
      })
   })

   it('homeTest', () => {
      cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
      cy.url().should("contain", "seleniumPractise")
      // code here
      Hpage.getsearchbox().type(pData.productname)

      Hpage.getproducts().should('have.length', 2)

      Hpage.getproducts().each((el, index, list) => {
         const velname = el.find('h4.product-name').text()
         if (velname.includes('Tomato')) {
            cy.wrap(el).contains('ADD TO CART').click()
         }
      });
      Hpage.getCartButton().click()
      Hpage.getproceeedtocheckout().click()
      porder.getplaceorderbtn().click()
      Cpage.getcountryoption().select("India")
      Cpage.getAgreebtn().click()
      Cpage.getproceedbtn().click()
      // thankpage.getthankyoumsg({ timeout: 10000 }).invoke('text').then((text) => {
      //    // Log the text to the console
      //    cy.log(text);

      //    // Assert the text value
      //    expect(text).to.equal('Thank you. Your order has been placed successfully ...!!! ');


      // })




   })
  
});
