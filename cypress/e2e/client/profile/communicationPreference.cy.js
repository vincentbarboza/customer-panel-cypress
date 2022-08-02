import client from '../../../fixtures/client/client.json'

describe('communication preference - client', () => {
  beforeEach(() => {
    //log in and go to the profile edit page
    cy.login(client.email, client.password)
    cy.profilePage()
  })

  it('should allow the client to edit communication preference', () => {
    //go to communication preference edit page
    cy.get('[data-cy="c-communication-editable__button"] > svg').click()

    //choose communication preference
    cy.get('span.c-radio__label').eq(1).click()
    cy.get('span.c-radio__label').eq(0).click()

    // //save
    cy.get('[data-cy="c-btn"]').click()
  })

  afterEach(() => {
    cy.logout()
  })
})
