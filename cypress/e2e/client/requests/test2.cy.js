import client from '../../../fixtures/client/client.json'


describe('test2', () => {
    before('test2', () => {
        cy.login(client.email, client.password)
    })

    it('test2', () => {
    })

    it('test2', () => {
        cy.menu()
    })
})