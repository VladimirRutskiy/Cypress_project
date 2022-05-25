/// <reference types="Cypress" />

it('By ID', () => {
    cy.visit('http://www.facebook.com/')
    cy.get('#email')
});

it('By Class', () => {
    cy.visit('https://docs.cypress.io/guides/references/configuration')
    cy.get('.main-content-title')
});

it('By Tag', () => {
    cy.visit('https://docs.cypress.io/guides/references/configuration')
    cy.get('nav')
});

it('By Tag value', () => {
    cy.visit('http://www.facebook.com/')
    cy.get('[name="pass"]')
});

it('By different Tag', () => {
    cy.visit('http://www.facebook.com/')
    cy.get('[data-testid="open-registration-form-button"][role="button"]')
});

it('By Contains name', () => {
    cy.visit('https://next.privat24.ua/')
    cy.get('*[class^="card"]')
});

it('Using Get with Find and Eq', () => {
    cy.visit('https://next.privat24.ua/deposit/open')
    cy.get('tbody').find('td').find('div').find('button').eq(0)
});

it('Using Get with Find and Eq', () => {
    cy.viewport(1800, 700)
    cy.visit('https://docs.cypress.io/api/commands/eq#Syntax')
    cy.get('main').find('div').find('nav').find('ul').find('li').find('a').eq(0)
});
it.only('Using Get with Find and Eq', () => {
    cy.viewport(1800, 700)
    cy.visit('https://docs.cypress.io/api/commands/eq#Syntax')
    cy.get('main').find('div').find('nav').find('ul').find('li').find('a').eq(0)
});
