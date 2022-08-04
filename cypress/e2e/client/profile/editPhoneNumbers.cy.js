import client from '../../../fixtures/client/client.json'

describe('phone numbers - client', () => {
  beforeEach(() => {
    //log in and go to the profile edit page
    cy.login(client.email, client.password)
    cy.profilePage()
  })

  //if there is no previously added phone number, the test does not work

  it('should allow the client to edit phone numbers', () => {
    cy.editPhoneNumbers(client.phone_number)
  })

  afterEach(() => {
    cy.logout()
  })
})
