import cleaner from '../../../fixtures/cleaner/cleaner.json'

describe('communication preference - cleaner', () => {
    beforeEach(() => {
        //log in and go to the profile edit page
        cy.login(cleaner.email, cleaner.password)
        cy.profilePage()
    })

    it('should allow the cleaner to edit communication preference', () => {
        cy.comunicationPreferences()
    })

    afterEach(() => {
        cy.logout()
    })
})
