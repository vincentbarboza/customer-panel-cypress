import loc from '../../../support/locators/locatorsCleaner'
import cleaner from '../../../fixtures/cleaner/cleaner.json'

describe('invitations - cleaner', () => {
  beforeEach(() => {
    //log in
    cy.login(cleaner.email, cleaner.password)
    cy.menu()
  })

  it('should allow the cleaner to edit invitations', () => {
    //go to invitations page
    cy.get(loc.invitations.btn_invitations).eq(2).click()

    //view invitation
    cy.get('[data-cy="cy-invitation-view"]').eq(0).click()
    cy.get(loc.invitations.accept_invitation).click()
    cy.get(loc.invitations.btn_date).click()
    cy.get(loc.invitations.day).eq(0).click()
    cy.get(loc.invitations.time).click()
    cy.get(loc.invitations.cancel).click()
  })

  afterEach(() => {
    cy.logout()
  })
})
