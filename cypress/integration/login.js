import loginPage from "./pages/loginPage";
const Lpage = new loginPage()
describe('log in test suit', () => {
    let logdata;
    let professions;
    before(() => {
        cy.fixture('loginData').then((data) => {
            logdata = data
        });
    });
   
  before(() => {
    // Load the fixture data
    cy.fixture('profession').then((data) => {
      professions = data.profname;
    });
  });
    // code here
    it('log in test valid username and password', () => {
        // code here

        cy.visit('https://rahulshettyacademy.com/loginpagePractise/');

        Lpage.getusernameField().clear().type(logdata[0].username)
        Lpage.getuserpassFiled().clear().type(logdata[0].password)
        Lpage.getAdminRadioBtn().click()
        Lpage.getdropdown().select(professions[1])
        Lpage.getAgreecheckbox().click()
        Lpage.getsigninBtn().click()
        cy.url().should("contain", "angularpractice/shop")


    });
    it('log in test invalid username and valid password', () => {
        // code here
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/');

        Lpage.getusernameField().clear().type(logdata[1].username)
        Lpage.getuserpassFiled().clear().type(logdata[1].password)
        Lpage.getAdminRadioBtn().click()
        Lpage.getdropdown().select(professions[0])
        Lpage.getAgreecheckbox().click()
        Lpage.getsigninBtn().click()
        
        // Lpage.getunscussefulmsg().should('exist') // Ensure the element exists in the DOM
        // .should('contain.text', 'Incorrect');
        cy.url().should("contain", "angularpractice/shop")
    });
    it('log in test valid username and invalid password', () => {
        // code here
        cy.visit('https://rahulshettyacademy.com/loginpagePractise/');

        Lpage.getusernameField().clear().type(logdata[2].username)
        Lpage.getuserpassFiled().clear().type(logdata[2].password)
        Lpage.getAdminRadioBtn().click()
        Lpage.getdropdown().select(professions[2])
        Lpage.getAgreecheckbox().click()
        Lpage.getsigninBtn().click()
        // Lpage.getunscussefulmsg().should('exist') // Ensure the element exists in the DOM
        // .should('contain.text', 'Incorrect');
        cy.url().should("contain", "angularpractice/shop")
    });
})