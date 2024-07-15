/// <reference types="cypress"/>
let productPageUrl = '';

describe('Marketing TCs', () => {
  it('Homepage', () => {
    //TC#1: Verify the website is accessible
    cy.viewport(1920, 1080);
    cy.visit('https://www.brainbite.ai');
    //TC#2:  Verify that user is able to Accept the cookies
    //cy.get('#modalAcceptAllBtn').click();

    //TC#3: Verify all the header links are accessible
    cy.get('.menu-link-wrap > [href="/lesinhoud"]').should('have.attr', 'href').and('include', '/lesinhoud');
    cy.get('.menu-link-wrap > [href="/hoe-werkt-het"]').should('have.attr', 'href').and('include', '/hoe-werkt-het');
    //cy.get(':nth-child(3) > .css-15kcnfm').should('have.attr', 'href').and('include', '/en_pk/tablets');
    //cy.get(':nth-child(4) > .css-15kcnfm').should('have.attr', 'href').and('include', '/en_pk/accessories');



  })
})