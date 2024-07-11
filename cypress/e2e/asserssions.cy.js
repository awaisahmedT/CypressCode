/// <reference types="cypress"/>

it('Assertions-demo', () => {
   cy.visit('www.google.com')
   cy.get('#APjFqb').type('Test')
   cy.contains('Google Search').click();
   cy.get('#hdtb-tls')
   .should('contain','Tools')
    .should('have.class','BaegVc YmvwI')
    .click();
  });