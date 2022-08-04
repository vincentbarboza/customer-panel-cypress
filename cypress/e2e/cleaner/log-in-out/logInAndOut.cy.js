import cleaner from '../../../fixtures/cleaner/cleaner.json'

describe('log in and log out - cleaner', () => {
    beforeEach(() => {
        //log in 
        cy.login(cleaner.email, cleaner.password)
    })

    it('should allow a cleaner to log out', () => {
        //log out
        cy.logout()
    })
}) 
