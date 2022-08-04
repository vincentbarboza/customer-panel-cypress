import client from '../../../fixtures/client/client.json'

describe('log in and log out - client', () => {
    beforeEach(() => {
        //log in 
        cy.login(client.email, client.password)
    })

    it('should allow a cleaner to log out', () => {
        //log out
        cy.logout()
    })
}) 
