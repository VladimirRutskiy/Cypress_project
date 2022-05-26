/// <reference types="Cypress" />
import { basePage } from "../support/pages/basePage"
import { mobileReplenishment } from "../support/pages/mobileReplenishment"
import { transfers } from "../support/pages/transfers"

it('Replenishment of Ukraine mobile phone number', () => {
    basePage.open('https://next.privat24.ua/mobile?lang=en')
    mobileReplenishment.typePhoneNumber('634687615')
    basePage.typeAmount('1')
    basePage.typeDebitCardData('4552331448138217', '0524', '111')
    mobileReplenishment.submitPayment()   
    cy.wait(2000)
    mobileReplenishment.checkDebitCard('4552 **** **** 8217')
    mobileReplenishment.checkDebitAmount('1&nbsp;UAH')
    mobileReplenishment.checkDebitComission('2')
    mobileReplenishment.checkPaymentCurrency('&nbsp;UAH')
});

it('Money transfer between foreign cards', () => {
    basePage.open('https://next.privat24.ua/money-transfer/card?lang=en')   
    basePage.typeDebitCardData('4552331448138217', '0524', '111')
    transfers.typeDebitNameAndSurname('Shayne', 'McConnell')
    transfers.typeReceiverCard('5309233034765085')
    transfers.typeReceiverNameAndSurname('Juliana', 'Janssen')
    basePage.typeAmount('350')
    transfers.typeComment('Cypress test')
    cy.wait(2000)
    transfers.submitPayment()
    cy.wait(2000)
    transfers.checkDebitAndReceiverCard('4552 3314 4813 8217', '5309 2330 3476 5085')
    transfers.checkDebitAmountAndTotalAmount('350 UAH', '453.09&nbsp;UAH')
    transfers.checkDebitCommision('103.09 UAH')   
    transfers.checkComment('Cypress test')   
});

