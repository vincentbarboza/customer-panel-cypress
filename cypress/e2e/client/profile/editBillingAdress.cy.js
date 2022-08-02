import client from '../../../fixtures/client/client.json'

describe('edit the billing address - client', () => {
  beforeEach(() => {
    //log in and go to the profile edit page
    cy.login(client.email, client.password)
    cy.profilePage()
  })

  it('should allow a client to edit the billing address', () => {
    //go to the billing address edit page
    cy.get('[data-cy="c-address-billing-editable__button"] > svg').click()

    //(cancel request button is not working)
    // cy.get('.c-btn--secondary > span').click();

    //enter personal data
    cy.get('[name="street"]').clear().type(client.address.street)
    cy.get('[name="housenumber"]').clear().type(client.address.house_number)
    cy.get('[name="zipcode"]').click().clear().type(client.address.zipcode)
    cy.get('[name="city"]').click().clear().type(client.address.country)
    cy.get('.c-country__value').click()
    cy.contains('.c-country__name', 'Netherlands').click({
      waitForAnimations: false,
    })
    cy.contains('.c-country__name', 'Netherlands').click({ force: true })

    //save
    cy.get('[data-cy="c-btn"]').eq(1).click()
  })

  afterEach(() => {
    cy.logout()
  })
})
