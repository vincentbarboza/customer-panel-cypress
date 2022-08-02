import client from '../../../fixtures/client/client.json'

describe('appointments - client', () => {
  beforeEach(() => {
    //log in and click on the menu
    cy.login(client.email, client.password)
    cy.menu()
  })

  it('should allow the client to edit the appointments', () => {
    cy.appointments(client.message_review)
  })

  afterEach(() => {
    cy.logout()
  })
})
