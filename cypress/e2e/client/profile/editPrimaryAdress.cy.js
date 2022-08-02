import client from '../../../fixtures/client/client.json'

describe('edit the primary address - client', () => {
  beforeEach(() => {
    //log in and go to the profile edit page
    cy.login(client.email, client.password)
    cy.profilePage()
  })

  it('should allow a client to edit the primary address', () => {
    //go to the primary address edit page
    cy.get('[data-cy="c-address-editable__button"] > svg').click()

    //enter personal data
    cy.get('[name="street"]').clear().type(client.address.street)
    cy.get('[name="housenumber"]').clear().type(client.address.house_number)
    cy.get('[name="zipcode"]').clear().type(client.address.zipcode)
    cy.get('[name="city"]').clear().type(client.address.city)
    cy.get('.c-country__value').click()
    cy.contains('.c-country__name', 'Netherlands').click({ force: true })

    //save
    cy.get('[data-cy="c-btn"]').click()
  })

  afterEach(() => {
    cy.logout()
  })
})
