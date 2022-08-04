import client from '../../../fixtures/client/client.json'

describe('notifications - client', () => {
    beforeEach(() => {
        cy.login(client.email, client.password)

    })

    it('should allow the client to view the notifications', () => {
        cy.notifications()
    })

    afterEach(() => {
        cy.logout()
    })
})