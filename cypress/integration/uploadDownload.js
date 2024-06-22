//https://rahulshettyacademy.com/upload-download-test/index.html

const cypress = require("cypress");


describe('upload  dwonload excel suit', () => {
   // code here
   it('upload  dwonload excel test', () => {
      // code here
      FilePtah= cypress.defineConfig("fileserverFolder")+"cypress/downloads/download.xlsx"
      cy.visit('https://rahulshettyacademy.com/upload-download-test/index.html');
      cy.get('#downloadButton').click()
      cy.task('writeExccel',{searchText:'Apple',replceText:'Iphone',filepath:FilePtah})
      cy.get('#fileinput').selectFile(FilePtah)
   });
})