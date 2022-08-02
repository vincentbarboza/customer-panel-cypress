import loc from '../../../support/locatorsClient'
import cleaner from '../../../fixtures/cleaner/cleaner.json'

describe('add absence - cleaner', () => {
  beforeEach(() => {
    //log in
    cy.login(cleaner.email, cleaner.password)
  })

  it('should allow the cleaner to add absence', () => {
    const date = new Date()
    const dateAddAbsence = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + 1,
    )

    //go to add absence page
    cy.get(loc.absence.absence_page).click()

    //add absence
    cy.get('[data-cy="c-datepicker__input"]').eq(0).click()
    cy.get(`.DayPicker-Week > [aria-label="${dateAddAbsence.toDateString()}"]`)
      .eq(1)
      .click()
    cy.get(`.DayPicker-Week > [aria-label="${dateAddAbsence.toDateString()}"]`)
      .eq(1)
      .click()

    //add time
    cy.get('.c-input.c-input--with-icon').eq(0).click()
    cy.get('.c-autocomplete__option').first().click()
    cy.get('.c-input.c-input--with-icon').eq(1).click()
    cy.get('.c-autocomplete__option').last().click()

    //choosing reason
    for (let i = 0; i < 3; i++) {
      cy.get('.c-radio__label').eq(i).click()
    }

    //save
    cy.get('[data-cy="c-btn"] > span').click()

    //notification
    cy.contains(
      '.c-notification__content',
      'Absence added successfully',
    ).should('be.visible')
  })

  afterEach(() => {
    cy.logout()
  })
})
