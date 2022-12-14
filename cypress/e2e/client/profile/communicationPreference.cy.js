import client from '../../../fixtures/client/client.json'

describe('communication preference - client', () => {
  beforeEach(() => {
    //log in and go to the profile edit page
    cy.login(client.email, client.password)
    cy.profilePage()
  })

  it('should allow the client to edit communication preference', () => {
    cy.comunicationPreferences()
  })

  afterEach(() => {
    cy.logout()
  })
})
