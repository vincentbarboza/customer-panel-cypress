import client from '../../../fixtures/client/client.json'

describe('email addresses - client', () => {
  beforeEach(() => {
    //log in and go to the profile edit page
    cy.login(client.email, client.password)
    cy.profilePage()
  })

  it('should allow a client to edit the email address', () => {
    cy.emailAdresses(client.email, client.email2)
  })

  afterEach(() => {
    cy.logout()
  })
})
