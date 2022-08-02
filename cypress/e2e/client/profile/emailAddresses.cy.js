import client from '../../../fixtures/client/client.json'

describe('email addresses - client', () => {
  beforeEach(() => {
    //log in and go to the profile edit page
    cy.login(client.email, client.password)
    cy.profilePage()
  })

  it('should allow a client to edit the email address', () => {
    //go to email addresses edit page
    cy.get('[data-cy="c-email-editable__button"] > svg').click()

    //edit primary email adress
    cy.get('[name="primaryEmail"]').clear().type('clientcypress@cypress.com')

    //edit billing email adress
    cy.get('[name="billingEmail"]').clear().type('clientcypress2@cypress.com')

    //save
    cy.get('[data-cy="c-btn"]').click()
  })

  afterEach(() => {
    cy.logout()
  })
})
