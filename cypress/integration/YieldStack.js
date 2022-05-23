/// <reference types="cypress" />

import data from '../fixtures/Data.json';

describe('PIV Checklist', () => {

    it('Admin success login', () => {
        cy.visit('https://portaluat.yieldstack.com/login');
        cy.get('.col-12 > :nth-child(1) > .input-full-width').type(data.email);
        cy.get('.nb-form-control-container > .input-full-width').type(data.password);
        cy.get('.button').click();
        cy.get('.success-link-text').should('have.text' , ' Please enter the 6-digit code we have sent to your registered mobile device. ');
        cy.get('.button').click();
        cy.wait(5000);
        cy.get('a.ng-tns-c178-8 > .menu-icon > svg').click();
        cy.get('h5').should('have.text',' User Management ');
    });


    it('Orginator Manager success login', () => {
        cy.visit('https://portaluat.yieldstack.com/login');
        cy.get('.col-12 > :nth-child(1) > .input-full-width').type(data.OrgEmail);
        cy.get('.nb-form-control-container > .input-full-width').type(data.password);
        cy.get('.button').click();
        cy.get('.success-link-text').should('have.text' , ' Please enter the 6-digit code we have sent to your registered mobile device. ');
        cy.get('.button').click();
        cy.get('.svg-inline--fa').click();
        cy.get('h5').should('have.text',' Asset Portfolio ');
    });


    it('Lender success login', () => {
        cy.visit('https://portaluat.yieldstack.com/login');
        cy.get('.col-12 > :nth-child(1) > .input-full-width').type(data.LenderEmail);
        cy.get('.nb-form-control-container > .input-full-width').type(data.password);
        cy.get('.button').click();
        cy.get('.success-link-text').should('have.text' , ' Please enter the 6-digit code we have sent to your registered mobile device. ');
        cy.get('.button').click();
        cy.get('h5').should('have.text',' YieldStack Capital Partners Dashboard ');
        cy.get('a.ng-tns-c178-3 > .menu-icon').click();
        cy.wait(5000);
        cy.get('.svg-inline--fa').click();
        cy.get('h5').should('have.text',' Asset Portfolio ');
    });

    it('[Admin] Login + Verify Menu Items', () => {
        cy.visit('https://portaluat.yieldstack.com/login');
        cy.get('.col-12 > :nth-child(1) > .input-full-width').type(data.email);
        cy.get('.nb-form-control-container > .input-full-width').type(data.password);
        cy.get('.button').click();
        cy.get('.success-link-text').should('have.text' , ' Please enter the 6-digit code we have sent to your registered mobile device. ');
        cy.get('.button').click();
        cy.wait(3000);
        cy.get('h5').should('have.text',' Dashboard ');
    });
    it('Investment Management', () => {
        cy.visit('https://portaluat.yieldstack.com/login');
        cy.get('.col-12 > :nth-child(1) > .input-full-width').type(data.email);
        cy.get('.nb-form-control-container > .input-full-width').type(data.password);
        cy.get('.button').click();
        cy.get('.success-link-text').should('have.text' , ' Please enter the 6-digit code we have sent to your registered mobile device. ');
        cy.get('.button').click();
        cy.wait(3000);
        //Investments
        cy.get('a.ng-tns-c178-4 > .menu-icon > .svg-inline--fa').click();
        cy.get('.title > .ng-star-inserted').should('have.text',' View Investments ');
        cy.get(':nth-child(1) > nb-card-body > .text-center > .appearance-filled').click();
        
        //Investor Management
        cy.get('a.ng-tns-c178-5 > .menu-icon > svg').click();
        cy.get('.input-full-width').type('  ');
        cy.get('.nb-form-field-addon > nb-icon > .eva > [data-name="Layer 2"] > g > rect').click();
        cy.get('.input-full-width').type('test');
        cy.get('.nb-form-field-addon > nb-icon > .eva > [data-name="Layer 2"] > g > rect').click();
        cy.wait(2000);
        cy.get('#value > .select-button').click();
        cy.xpath('/html/body/app-root/app-home/app-layout/nb-layout/div[2]/div/div/nb-option-list/ul/nb-option[1]').click();

        //Documents
        cy.get('a.ng-tns-c178-6 > .menu-icon > svg').click();
        cy.wait(3000);
        cy.get('.input-full-width').click();
        cy.get('.select-button').click();
        cy.xpath('/html/body/app-root/app-home/app-layout/nb-layout/div[2]/div/div/nb-option-list/ul/nb-option[2]').click();
        cy.get('.input-full-width').type(' ');
        cy.get('.input-full-width').type('test');
        cy.get('.nb-form-field-addon > nb-icon > .eva > [data-name="Layer 2"] > g > rect').click();

        //Payments
        cy.get('a.ng-tns-c178-7 > .menu-icon > svg').click();
        cy.get('#transactionType > .select-button').click();
        cy.xpath('/html/body/app-root/app-home/app-layout/nb-layout/div[2]/div/div/nb-option-list/ul/nb-option[2]').click();
        cy.get('#investmentId > .select-button').click();
        cy.xpath('/html/body/app-root/app-home/app-layout/nb-layout/div[2]/div/div/nb-option-list/ul/nb-option[2]').click();
        cy.get('#value > .select-button').click();
        cy.xpath('/html/body/app-root/app-home/app-layout/nb-layout/div[2]/div/div/nb-option-list/ul/nb-option[1]').click();
        cy.get('.input-full-width').type(' ');
        cy.get('.input-full-width').type('test');
        cy.get('.nb-form-field-addon > nb-icon > .eva > [data-name="Layer 2"] > g > rect').click();
       
        //User Management
        cy.get('a.ng-tns-c178-8 > .menu-icon > svg').click();
        cy.get(':nth-child(1) > #value > .select-button').click();
        cy.xpath('/html/body/app-root/app-home/app-layout/nb-layout/div[2]/div/div/nb-option-list/ul/nb-option[3]').click();
        cy.get(':nth-child(2) > #value > .select-button').click();
        cy.xpath('/html/body/app-root/app-home/app-layout/nb-layout/div[2]/div/div/nb-option-list/ul/nb-option[3]').click();
        cy.get('.input-full-width').click();
        cy.get('.input-full-width').type('  ');
        cy.get('.input-full-width').type('Test');
        cy.get('.nb-form-field-size-medium > .ng-star-inserted > nb-icon > .eva > [data-name="Layer 2"] > g > rect').click();

        //Compliance
        cy.get('#Layer_1').click();
        
    });
        
        it('Asset Management', () => {
        cy.visit('https://portaluat.yieldstack.com/login');
        cy.get('.col-12 > :nth-child(1) > .input-full-width').type(data.email);
        cy.get('.nb-form-control-container > .input-full-width').type(data.password);
        cy.get('.button').click();
        cy.get('.success-link-text').should('have.text' , ' Please enter the 6-digit code we have sent to your registered mobile device. ');
        cy.get('.button').click();
        cy.wait(3000);
        cy.get('h5').should('have.text',' Dashboard ');
        cy.get('a.ng-tns-c178-11 > .menu-icon > svg').click();
        cy.get('a.ng-tns-c178-12 > .menu-icon > .svg-inline--fa').click();
        cy.get('.p-datatable-tbody > :nth-child(1) > :nth-child(13)').scrollIntoView().click();
        cy.get(':nth-child(3) > .tab-link').click();
        cy.xpath('/html/body/app-root/app-home/app-layout/nb-layout/div/div/div/div/div/nb-layout-column/app-asset-details/div[2]/div/nb-card/nb-card-body/nb-tabset/nb-tab[3]/div/app-asset-documents/div[1]/div/div[1]/nb-select').click();
        cy.xpath('/html/body/app-root/app-home/app-layout/nb-layout/div[2]/div/div/nb-option-list/ul/nb-option[2]').click();
        
        
        
        });

        
        it('[Admin] User Management (Create New User + Login with New User Account)', () => {
            cy.visit('https://portaluat.yieldstack.com/login');
            cy.get('.col-12 > :nth-child(1) > .input-full-width').type(data.email);
            cy.get('.nb-form-control-container > .input-full-width').type(data.password);
            cy.get('.button').click();
            cy.get('.success-link-text').should('have.text' , ' Please enter the 6-digit code we have sent to your registered mobile device. ');
            cy.get('.button').click();
            cy.wait(3000);
            cy.get('h5').should('have.text',' Dashboard ');
            cy.get('a.ng-tns-c178-8 > .menu-icon > svg').click();
            cy.get('.float-right').click();
            
            //Further part cannot be done, until creating user's email issue will be resolved.  
        });

        it('[Admin] User Management - Edit | Disable | Enable | Archive | )', () => {
            cy.visit('https://portaluat.yieldstack.com/login');
            cy.get('.col-12 > :nth-child(1) > .input-full-width').type(data.email);
            cy.get('.nb-form-control-container > .input-full-width').type(data.password);
            cy.get('.button').click();
            cy.get('.success-link-text').should('have.text' , ' Please enter the 6-digit code we have sent to your registered mobile device. ');
            cy.get('.button').click();
            cy.wait(3000);
            cy.get('h5').should('have.text',' Dashboard ');
            cy.get('a.ng-tns-c178-8 > .menu-icon > svg').click();
            cy.get(':nth-child(1) > [style="min-width: 200px;"] > [nbtooltip="Edit"] > nb-icon > svg').scrollIntoView();
        
        });
        });      
    
