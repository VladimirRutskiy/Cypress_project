export class MobilePhoneReplenishment {
    typePhoneNumber(phoneNumber){
        cy.get('[data-qa-node="phone-number"]')
            .type(phoneNumber)
    }

    typeAmount(amount){
        cy.get('[data-qa-node="amount"]')
            .type(amount)
    }

    submitPayment(){
        cy.get('[data-qa-node="submit"]')
            .click()
    }

    checkDebitCard(debitCard){
        cy.get('[data-qa-node="card"]')
            .should('have.text', debitCard)
    }

    checkDebitAmount(debitAmount){
        cy.get('[data-qa-node="amount"]')
            .eq(1)
            .should('have.html', debitAmount)
    }

    checkDebitComission(debitComission){
        cy.get('[data-qa-node="commission"]')
            .eq(1)
            .should('have.html', debitComission)
    }

    checkPaymentCurrency(paymentCurrency){
        cy.get('[data-qa-node="commission-currency"]')
            .should('have.html', paymentCurrency)
    }
}

export const mobileReplenishment = new MobilePhoneReplenishment()