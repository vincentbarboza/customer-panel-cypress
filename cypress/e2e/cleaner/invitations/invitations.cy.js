import cleaner from '../../../fixtures/cleaner/cleaner.json'

describe('invitations - cleaner', () => {
  beforeEach(() => {
    //log in
    cy.login(cleaner.email, cleaner.password)
    cy.menu()
  })

  it('should allow the cleaner to edit invitations', () => {
    //go to invitations page
    cy.get('.c-vertical-nav__item').eq(2).click()

    //view invitation
    cy.get('[data-cy="cy-invitation-view"]').eq(0).click()
    cy.get('.c-btn.c-invitation__choose').click()
    cy.get('[data-cy="c-datepicker__input"]').click()
    cy.get('.c-dropdown__overlay').eq(0).click()
    cy.get(':nth-child(6) > .c-modal > .c-modal__close > svg').click()
    cy.get('.c-modal__close').click()
  })

  afterEach(() => {
    cy.logout()
  })
})
