import cleaner from '../../../fixtures/cleaner/cleaner.json'

describe('email addresses - client', () => {
    beforeEach(() => {
        //log in and go to the profile edit page
        cy.login(cleaner.email, cleaner.password)
        cy.profilePage()
    })

    it('should allow a cleaner to edit the email address', () => {
        cy.emailAdresses(cleaner.email, cleaner.email2)
    })

    afterEach(() => {
        cy.logout()
    })
})
