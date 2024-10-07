/// <reference types="cypress"/>
  //let productPageUrl = '';

describe('Login Page Tests', () => {
  it('Verify elements on the Login page', () => {
    // Visit the login page
    cy.visit('https://careerfair.ae/');

    // Assert the logo is visible
    cy.get('img[alt="Adnoc Logo"]').should('be.visible');

    // Assert the login heading is visible
   cy.get('.text-center.text-3xl.font-bold.leading-9.tracking-tight.text-gray-900');

    // Assert the email address field is visible
    cy.get('input[type="email"]').should('be.visible');

    // Assert the password field is visible
    cy.get('input[type="password"]').should('be.visible');

    // Assert the forgot password link is visible
   cy.get("button[class='font-semibold text-primary-blue-500 hover:text-primary-blue-400']").should('be.visible');

    // Assert the login button is visible
    cy.get("button[type='submit']").should('be.visible');

    // Assert the "Continue with Google" button is visible
    cy.get("button[class='flex w-full items-center justify-center space-x-2 rounded-md border border-gray-300 bg-white px-3 py-1.5 text-sm font-semibold leading-6 text-black shadow-sm hover:bg-gray-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-blue-500']").should('be.visible');

    // Assert the "Sign up" link is visible
    cy.get("a[class='font-semibold leading-6 text-primary-blue-500 hover:text-primary-blue-400']").should('be.visible');
  });

  it('Verify successful login', () => {
    // Visit the login page
    cy.visit('https://careerfair.ae/login');

    // Enter email address
    cy.get('input[type="email"]').type('testawais@yopmail.com');

    // Enter password
    cy.get('input[type="password"]').type('Qqqqqq1!');

    // Click on the login button
    cy.get('button[type="submit"]').click();
  });

  it('Verify login with invalid credentials', () => {
    // Visit the login page
    cy.visit('https://careerfair.ae/login');

    // Enter invalid email address
    cy.get('input[type="email"]').type('invalid@example.com');

    // Enter invalid password
    cy.get('input[type="password"]').type('wrongpassword');

    // Click on the login button
    cy.get('button[type="submit"]').click();

    // Assert the error message is visible
    cy.get('div[role="alert"] div:nth-child(2)').should('contain', 'Invalid Credentials');
  });

});