import cleaner from '../../../fixtures/cleaner/cleaner.json'

describe('edit phone numbers - cleaner', () => {
    beforeEach(() => {
        //log in and go to the profile edit page
        cy.login(cleaner.email, cleaner.password)
        cy.profilePage()
    })

    //if there is no previously added phone number, the test does not work

    it('should allow the cleaner to edit phone numbers', () => {
        cy.editPhoneNumbers(cleaner.phone_number)
        cy.wait(2000)
    })

    afterEach(() => {
        cy.logout()
    })
})
