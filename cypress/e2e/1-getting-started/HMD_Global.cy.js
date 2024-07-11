/// <reference types="cypress"/>
let productPageUrl = '';

describe('HMD Website Tests', () => {
  it('HMD Homepage', () => {
    //Verify the website is accessible
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
    //Get URL for the next block
    cy.url().then((url) => {
      productPageUrl = url;
    });
  });

  it('Product-Details', () => {
    cy.visit(productPageUrl);
    cy.get('#modalAcceptAllBtn').click(); // Accept cookies
    // Smooth scroll to the bottom of the page
    
    cy.get('footer').scrollIntoView({ duration: 5000 });
    cy.get('.css-1fiiow1 > [href="/en_pk/nokia-c-12-pro/specs"] > span').click();
    cy.get('footer').scrollIntoView({ duration: 5000 });
    cy.get('.e1ia3m1c0').click();
    
    // Smooth scroll to the bottom of the page
    cy.get('.css-1fiiow1 > [href="/en_pk/compare?phones=nokia-c-12-pro"]').click(); // Device comparision
    cy.get('.selection1 > .dtc-select > .field-container > .select').select('Nokia G21');
    cy.get('.selection2 > .dtc-select > .field-container > .select').select('Nokia 2660 Flip');
    cy.get('.selection3 > .dtc-select > .field-container > .select').select('Nokia 105+');
    
    // Smooth scroll to the bottom of the page
    cy.get('footer').scrollIntoView({ duration: 5000 }

    )
  });

  it('Contact-Us', () => {
    cy.visit(productPageUrl);
    cy.get('#modalAcceptAllBtn').click(); // Accept cookies
    // Smooth scroll to the bottom of the page
    cy.get('.css-1s6mtog').click();
    cy.get('#navigation-secondary-menu-drawer > a').click();
    cy.get('footer').scrollIntoView({ duration: 5000 });
    cy.get('.css-5tz1ub > .row > :nth-child(2) > :nth-child(2) > .css-z6ampc > span').click()
    cy.get('.css-1pj9k7h > .icon-trailing > .field-container > .input').type('Awais Ahmed')
  });

});
