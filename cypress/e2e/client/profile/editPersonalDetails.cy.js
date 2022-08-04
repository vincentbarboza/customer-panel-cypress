import client from '../../../fixtures/client/client.json'

describe('edit personal details - cleaner', () => {
  beforeEach(() => {
    //log in and go to the profile edit page
    cy.login(client.email, client.password)
    cy.profilePage()
  })

  it('should allow a cleaner to edit the personal details', () => {
    cy.editPersonalDetails(client.name, client.middle_name, client.last_name, client.date_of_birth)

  })

  afterEach(() => {
    cy.logout()
  })
})