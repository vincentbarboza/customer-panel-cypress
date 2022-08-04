import loc from '../../../support/locators/locatorsCleaner'
import cleaner from '../../../fixtures/cleaner/cleaner.json'

describe('payment mothod - cleaner', () => {
    beforeEach(() => {
        //log in and go to the profile edit page
        cy.login(cleaner.email, cleaner.password)
        cy.profilePage()
    })

    it('should allow the cleaner to edit the payment method', () => {
        //go to payment method edit page
        cy.get(loc.payment_method.btn_payment_method).click()

        //edit payment method
        cy.get(loc.payment_method.bank_account).clear().type(cleaner.bank_account)

        //save
        cy.get(loc.payment_method.save).click()
    })

    afterEach(() => {
        cy.logout()
    })
})
