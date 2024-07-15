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
    
    //TC#4: Verify that the Join button is visible and working
    cy.get('.menu-link-wrap > .link-block')
    .should('contain','Meld je aan')
    .should('have.attr', 'href')
    
    //TC#5: Verify the JOIN popup appears when user clicks on it
    cy.get('.menu-link-wrap > .link-block > .btn-label-wrapper > div').click();

  })
})