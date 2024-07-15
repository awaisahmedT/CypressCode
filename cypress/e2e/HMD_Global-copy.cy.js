/// <reference types="cypress"/>
let productPageUrl = '';

describe('HMD Homepage TCs', () => {
  it('HMD Homepage', () => {
    //TC#1: Verify the website is accessible
    cy.visit('https://www.hmd.com/en_pk');
    cy.viewport(1920, 1080);
    //TC#2:  Verify that user is able to Accept the cookies
    cy.get('#modalAcceptAllBtn').click();

    //TC#3: Verify all the header links are accessible
    cy.get(':nth-child(1) > .css-15kcnfm').should('have.attr', 'href').and('include', '/en_pk/smartphones');
    cy.get(':nth-child(2) > .css-15kcnfm').should('have.attr', 'href').and('include', '/en_pk/feature-phones');
    cy.get(':nth-child(3) > .css-15kcnfm').should('have.attr', 'href').and('include', '/en_pk/tablets');
    cy.get(':nth-child(4) > .css-15kcnfm').should('have.attr', 'href').and('include', '/en_pk/accessories');

    //TC#4: Verify the banner text is visible
    cy.get(':nth-child(1) > .word').should('contain', 'Human');
    cy.get(':nth-child(2) > .word').should('contain', 'Mobile');
    cy.get(':nth-child(3) > .word').should('contain', 'Devices');

    //TC#5: Verify the banner is showing
    cy.get('.e1r2qxth0').should('be.visible');

    // TC: Verify the "Read our story" button is visible and clickable
    cy.get('.e114gr0f0')
      .should('be.visible')
      .should('have.attr', 'href').and('include', '/en_pk/about');

    // TC#6: Verify that the title of the section is visible as "Latest Devices"
    cy.get('.css-1mpud22 > .h4').should('be.visible');


    // TC: Verify that "Smartphones" link is visible and clickable
    cy.scrollTo(0, 500);
    cy.get('css-1mpud22 e1dnocrj5')
      .should('be.visible')
      .should('have.attr', 'href').and('include', '/en_pk/smartphones');


  })
})