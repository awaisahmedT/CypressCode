/// <reference types="cypress"/>


describe('HMD Website Tests', () => {
  it('HMD Homepage', () => {
    cy.visit('https://www.hmd.com/en_pk');
    cy.get('#modalAcceptAllBtn').click(); // Accept cookies
    
    //TC: Verify all the header links are accessible
    cy.get(':nth-child(1) > .css-15kcnfm').should('have.attr', 'href').and('include', '/en_pk/smartphones' );
    cy.get(':nth-child(2) > .css-15kcnfm').should('have.attr', 'href').and('include', '/en_pk/feature-phones' );
    cy.get(':nth-child(3) > .css-15kcnfm').should('have.attr', 'href').and('include', '/en_pk/tablets' );
    cy.get(':nth-child(4) > .css-15kcnfm').should('have.attr', 'href').and('include', '/en_pk/accessories' );
    
    //TC: Verify the banner text is visible
    cy.get(':nth-child(1) > .word').should('contain','Human'); 
    cy.get(':nth-child(2) > .word').should('contain','Mobile');
    cy.get(':nth-child(3) > .word').should('contain','Devices');
    
    //TC: Verify the banner is showing
    cy.get('.e1r2qxth0').should('be.visible');
    
    //TC: Verify the page is loaded completely with all elements
    cy.get('footer').scrollIntoView({ duration: 5000 });
    
    //TC: Verify the page's title
    cy.get(':nth-child(1) > .css-15kcnfm').click()
    
    //TC: Verify the page's title
    cy.get('.h5').should('contain','Smartphones');
    
    //TC: Verify the page is loaded completely with all elements
    cy.get('footer').scrollIntoView({ duration: 5000 });
    cy.get('#product-content-nokia-c-12-pro > .css-eoqbn3 > .css-1fttcpj > .bold > .css-3q2m00').click();
    
    });
  });
