/// <reference types="cypress" />

import data from '../fixtures/Data.json';
import Locators from '../fixtures/Locators.json';

describe('PIV Checklist', () => {

    it('Admin success login', () => {
        cy.visit(data.url);
        cy.get(Locators.LoginEmail).type(data.email);
        cy.get(Locators.LoginPass).type(data.password);
        cy.get('.button').click();
        cy.get('.success-link-text').should('have.text' , data.OTPSuccessMsg);
        cy.get('.button').click();
        cy.wait(5000);
        cy.get('a.ng-tns-c178-8 > .menu-icon > svg').click();
        cy.get('h5').should('have.text',' User Management ');
    });


    it('Orginator Manager success login', () => {
        cy.visit(data.url);
        cy.get(Locators.LoginEmail).type(data.OrgEmail);
        cy.get(Locators.LoginPass).type(data.password);
        cy.get('.button').click();
        cy.get('.success-link-text').should('have.text' , data.OTPSuccessMsg);
        cy.get('.button').click();
        cy.get('.svg-inline--fa').click();
        cy.get('h5').should('have.text',' Asset Portfolio ');
    });


    it('Lender success login', () => {
        cy.visit(data.url);
        cy.get(Locators.LoginEmail).type(data.LenderEmail);
        cy.get(Locators.LoginPass).type(data.password);
        cy.get('.button').click();
        cy.get('.success-link-text').should('have.text' , data.OTPSuccessMsg);
        cy.get('.button').click();
        cy.get('h5').should('have.text',' YieldStack Capital Partners Dashboard ');
        cy.get('a.ng-tns-c178-3 > .menu-icon').click();
        cy.wait(5000);
        cy.get('.svg-inline--fa').click();
        cy.get('h5').should('have.text',' Asset Portfolio ');
    });

    it('[Admin] Login + Verify Menu Items', () => {
        cy.visit(data.url);
        cy.get(Locators.LoginEmail).type(data.email);
        cy.get(Locators.LoginPass).type(data.password);
        cy.get('.button').click();
        cy.get('.success-link-text').should('have.text' , data.OTPSuccessMsg);
        cy.get('.button').click();
        cy.wait(3000);
        cy.get('h5').should('have.text',' Dashboard ');
    });
    it('Investment Management', () => {
        cy.visit(data.url);
        cy.get(Locators.LoginEmail).type(data.email);
        cy.get(Locators.LoginPass).type(data.password);
        cy.get('.button').click();
        cy.get('.success-link-text').should('have.text' , data.OTPSuccessMsg);
        cy.get('.button').click();
        cy.wait(3000);
        //Investments
        cy.xpath(Locators.InvestmentOpen).click();
        cy.get(Locators.ViewInvestment).click();
        cy.get(Locators.InvestmentView).click();
        
        //Investor Management
        cy.get('a.ng-tns-c178-5 > .menu-icon > svg').click();
        cy.get('.input-full-width').type('  ');
        cy.get(Locators.Search).click();
        cy.get('.input-full-width').type('test');
        cy.get(Locators.Search).click();
        cy.wait(2000);
        cy.get('#value > .select-button').click();
        cy.xpath(Locators.Xpath1).click();

        //Documents
        cy.get('a.ng-tns-c178-6 > .menu-icon > svg').click();
        cy.wait(3000);
        cy.get('.input-full-width').click();
        cy.get('.select-button').click();
        cy.xpath(Locators.Xpath2).click();
        cy.get('.input-full-width').type(' ');
        cy.get('.input-full-width').type('test');
        cy.get(Locators.SearchDoc).click();

        //Payments
        cy.get('a.ng-tns-c178-7 > .menu-icon > svg').click();
        cy.get('#transactionType > .select-button').click();
        cy.xpath(Locators.Xpath3).click();
        cy.get('#investmentId > .select-button').click();
        cy.xpath(Locators.Xpath3).click();
        cy.get('#value > .select-button').click();
        cy.xpath(Locators.Xpath4).click();
        cy.get('.input-full-width').type(' ');
        cy.get('.input-full-width').type('test');
        cy.get(Locators.SearchPayment).click();
       
        //User Management
        cy.get('a.ng-tns-c178-8 > .menu-icon > svg').click();
        cy.get(':nth-child(1) > #value > .select-button').click();
        cy.xpath(Locators.Xpath5).click();
        cy.get(':nth-child(2) > #value > .select-button').click();
        cy.xpath(Locators.Xpath5).click();
        cy.get('.input-full-width').click();
        cy.get('.input-full-width').type('  ');
        cy.get('.input-full-width').type('Test');
        cy.xpath(Locators.Xpath6).click();

        //Compliance
        cy.get('#Layer_1').click();
        
    });
        
    it('Asset Management', () => {
        cy.visit(data.url);
        cy.get(Locators.LoginEmail).type(data.email);
        cy.get(Locators.LoginPass).type(data.password);
        cy.get('.button').click();
        cy.get('.success-link-text').should('have.text' , data.OTPSuccessMsg);
        cy.get('.button').click();
        cy.wait(3000);
        cy.get('h5').should('have.text',' Dashboard ');
        cy.get('a.ng-tns-c178-8 > .menu-icon > svg').click();
        cy.xpath('/html/body/app-root/app-home/app-layout/nb-layout/div/div/div/nb-sidebar/div/div/app-sidebar/div/div/nb-menu/ul/li[11]/a/nb-icon').click();
        cy.get('.p-datatable-tbody > :nth-child(1) > :nth-child(13)').scrollIntoView().click();
        cy.get(':nth-child(3) > .tab-link').click();
        cy.xpath(Locators.Xpath7).click();
        cy.xpath(Locators.Xpath8).click();
        
        
        
        });

        
        it('[Admin] User Management (Create New User + Login with New User Account)', () => {
            cy.visit(data.url);
            cy.get(Locators.LoginEmail).type(data.email);
            cy.get(Locators.LoginPass).type(data.password);
            cy.get('.button').click();
            cy.get('.success-link-text').should('have.text' , data.OTPSuccessMsg);
            cy.get('.button').click();
            cy.wait(3000);
            cy.get('h5').should('have.text',' Dashboard ');
            cy.get('a.ng-tns-c178-8 > .menu-icon > svg').click();
            cy.get('.float-right').click();
            
            //Further part cannot be done, until creating user's email issue will be resolved.  
        });

        it('[Admin] User Management - Edit | Disable | Enable | Archive | )', () => {
            cy.visit(data.url);
            cy.get(Locators.LoginEmail).type(data.email);
            cy.get(Locators.LoginPass).type(data.password);
            cy.get('.button').click();
            cy.get('.success-link-text').should('have.text' , data.OTPSuccessMsg);
            cy.get('.button').click();
            cy.wait(3000);
            cy.get('h5').should('have.text',' Dashboard ');
            cy.get('a.ng-tns-c178-8 > .menu-icon > svg').click();
            cy.xpath('/html/body/app-root/app-home/app-layout/nb-layout/div[1]/div/div/div/div/nb-layout-column/app-users/div[3]/nb-card/nb-card-body/p-table/div/div/table/tbody/tr[10]/td[9]/button[1]/nb-icon/svg').scrollIntoView();
        
        });
        });      
    
