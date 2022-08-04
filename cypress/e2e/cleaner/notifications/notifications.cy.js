import cleaner from '../../../fixtures/cleaner/cleaner.json'

describe('notifications - cleaner', () => {
    beforeEach(() => {
        cy.login(cleaner.email, cleaner.password)

    })

    it('should allow the cleaner to view the notifications', () => {
        cy.notifications()
    })

    afterEach(() => {
        cy.logout()
    })
})