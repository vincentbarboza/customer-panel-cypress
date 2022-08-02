//only works if the client has no appointment and/or invoices

import client from '../../../fixtures/client/client.json'

describe('archive and delete account - client', () => {
  beforeEach(() => {
    //log in and go to the profile edit page
    cy.login(client.email, client.password)
    cy.profilePage()
  })
  //using .skip to skip this test
  it.skip('should allow the client to archive and delete account', () => {
    //go to the archive and delete page
    cy.get('.c-editable__content > div > .c-btn-text').click()
    cy.get('[data-cy="button-cancel"]').click()
    cy.get('.c-btn-text--red').click()

    //cancel
    cy.get('[data-cy="button-cancel"]').click()
  })

  afterEach(() => {
    cy.logout()
  })
})
