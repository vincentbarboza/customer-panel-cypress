import { eq } from 'lodash'
import client from '../../../fixtures/client/client.json'

describe('add absence - client', () => {
  beforeEach(() => {
    //log in
    cy.login(client.email, client.password)
  })

  it('should allow the client to add absence', () => {
    const date = new Date()
    const dateAddAbsence = new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + 1,
    )

    //go to add absence page
    cy.get('[data-cy="add-absence-btn"]').click()

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
