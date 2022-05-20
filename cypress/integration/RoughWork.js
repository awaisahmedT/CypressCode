/// <reference types="cypress" />

describe('Login Test Cases', () => {
    it('[Admin] User Management (Create New User + Login with New User Account)', () => {
        cy.visit('https://portaluat.yieldstack.com/login');
        cy.get('.col-12 > :nth-child(1) > .input-full-width').type('awais.ahmed+admin@lbhpartners.com');
        cy.get('.nb-form-control-container > .input-full-width').type('Qqqqqq1!');
        cy.get('.button').click();
        cy.get('.success-link-text').should('have.text' , ' Please enter the 6-digit code we have sent to your registered mobile device. ');
        cy.get('.button').click();
        cy.wait(3000);
        cy.get('h5').should('have.text',' Dashboard ');
        cy.get('a.ng-tns-c178-8 > .menu-icon > svg').click();
        //cy.get('.float-right').click();
        //cy.get(':nth-child(3) > :nth-child(1) > .input-full-width').click();
        //cy.get(':nth-child(3) > :nth-child(1) > .input-full-width').type('Awais')
        //cy.get(':nth-child(3) > :nth-child(2) > .input-full-width').click();
        //cy.get(':nth-child(3) > :nth-child(2) > .input-full-width').type('Org Manager');
        //cy.get(':nth-child(3) > :nth-child(2) > .input-full-width').click();
        //cy.get(':nth-child(4) > :nth-child(1) > .input-full-width').type('awais.ahmed+orgman2@lbhpartners.com');
        //cy.get('.nb-form-field-size-large > .nb-form-control-container > .input-full-width').type('#423423423');
        //cy.get(':nth-child(5) > :nth-child(1) > .appearance-outline > .select-button').click();
        //cy.xpath('/html/body/app-root/app-home/app-layout/nb-layout/div[2]/div[3]/div/nb-option-list/ul/nb-option[1]').click();
        //cy.get(':nth-child(5) > :nth-child(2) > .appearance-outline > .select-button').click();
        //cy.xpath('/html/body/app-root/app-home/app-layout/nb-layout/div[2]/div[3]/div/nb-option-list/ul/nb-option[2]').click();
        //cy.get('.col-12 > .float-right').click();
        cy.get('.input-full-width').click();
        cy.get('.input-full-width').type('Org Manager');
        cy.get('[nbtooltip="Copy Link"] > nb-icon > svg').scrollIntoView().click();
        cy.get('[nbtooltip="Copy Link"]').click();

        });   

       

       })
