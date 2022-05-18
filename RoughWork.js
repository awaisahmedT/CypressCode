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
           cy.get('a.ng-tns-c178-8 > .menu-icon > svg').click();
           cy.get(':nth-child(1) > #value > .select-button').click();
           cy.xpath('/html/body/app-root/app-home/app-layout/nb-layout/div[2]/div/div/nb-option-list/ul/nb-option[3]').click();
           cy.get(':nth-child(2) > #value > .select-button').click();
           cy.xpath('/html/body/app-root/app-home/app-layout/nb-layout/div[2]/div/div/nb-option-list/ul/nb-option[3]').click();
           cy.get('.input-full-width').click();
           cy.get('.input-full-width').type('  ');
           cy.get('.input-full-width').type('Test');
           cy.get('.nb-form-field-size-medium > .ng-star-inserted > nb-icon > .eva > [data-name="Layer 2"] > g > rect').click();
   
       
       });
       

       })
