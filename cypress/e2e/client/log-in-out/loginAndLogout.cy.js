import client from '../../../fixtures/client/client.json'

describe('log in and log ou - client', () => {
  beforeEach(() => {
    //log in and go to the menu
    cy.login(client.email, client.password)
  })

  it('should allow a client to log out', () => {
    //log out
    cy.logout()
  })
})
