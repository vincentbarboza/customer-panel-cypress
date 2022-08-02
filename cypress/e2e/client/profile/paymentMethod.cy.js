import client from '../../../fixtures/client/client.json'

describe('payment mothod - client', () => {
  beforeEach(() => {
    //log in and go to the profile edit page
    cy.login(client.email, client.password)
    cy.profilePage()
  })

  it('should allow the client to edit the payment method', () => {
    //go to payment method edit page
    cy.get('[data-cy="c-billing-editable__button"] > svg').click()

    //edit payment method
    cy.get('.c-radio__label').eq(0).click()
    cy.get('.c-input').clear().type('NL91ABNA0417164300')
    cy.get('.c-radio__label').eq(1).click()

    //save
    cy.get('[data-cy="c-btn"]').click()
  })

  afterEach(() => {
    cy.logout()
  })
})
