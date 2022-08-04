import client from '../../../fixtures/client/client.json'

describe('edit the addresses - client', () => {
  beforeEach(() => {
    //log in and go to the profile edit page
    cy.login(client.email, client.password)
    cy.profilePage()
  })

  it('should allow a client to edit the addresses', () => {
    cy.editAddresses(client.address.street, client.address.house_number, client.address.zipcode, client.address.city)

  })

  afterEach(() => {
    cy.logout()
  })
})
