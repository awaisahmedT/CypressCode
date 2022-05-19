/// <reference types="cypress" />

describe('Login Test Cases', () => {
    it('Asset Management', () => {
           cy.visit('https://portaluat.yieldstack.com/login');
           cy.get('.col-12 > :nth-child(1) > .input-full-width').type('awais.ahmed+admin@lbhpartners.com');
           cy.get('.nb-form-control-container > .input-full-width').type('Qqqqqq1!');
           cy.get('.button').click();
           cy.get('.success-link-text').should('have.text' , ' Please enter the 6-digit code we have sent to your registered mobile device. ');
           cy.get('.button').click();
           cy.wait(3000);
           cy.get('h5').should('have.text',' Dashboard ');
           cy.get('a.ng-tns-c178-5 > .menu-icon > svg').click();
           cy.get('.input-full-width').type('  ');
           cy.get('.nb-form-field-addon > nb-icon > .eva > [data-name="Layer 2"] > g > rect').click();
           cy.get('.input-full-width').type('test');
           cy.get('.nb-form-field-addon > nb-icon > .eva > [data-name="Layer 2"] > g > rect').click();
           cy.wait(2000);
           cy.get('#value > .select-button').click();
           cy.xpath('//*[@id="nb-option-0"]').click();
       });
       

       })
