import cleaner from '../../../fixtures/cleaner/cleaner.json'

describe('edit availability - cleaner', () => {
  beforeEach(() => {
    //log in
    cy.login(cleaner.email, cleaner.password)
  })

  it('should allow the cleaner to edit their availability', () => {
    //go to availability edit page
    cy.get('.c-workload__edit').click()

    //edit maximum distance and hours
    for (let i = 0; i <= 1; i++) {
      cy.get('.c-slider__handle')
        .eq(i)
        .trigger('mousedown', { which: 1, pageX: 200, pageY: 100 })
        .trigger('mousemove', { which: 1, pageX: 200, pageY: 600 })
        .trigger('mouseup')
      cy.get('.c-slider__handle')
        .eq(i)
        .trigger('mousedown', { which: 1, pageX: 900, pageY: 100 })
        .trigger('mousemove', { which: 1, pageX: 900, pageY: 600 })
        .trigger('mouseup')
    }

    //edit minimum rate
    for (let i = 1; i >= 0; i--) {
      cy.get('.c-numeric-input__button ').eq(i).trigger('mousedown')
      cy.wait(2000)
      cy.get('.c-numeric-input__button ').eq(i).trigger('mouseup')
    }

    //disable and enable days of the week
    cy.disableDaysOfTheWeek()

    //edit days of the week
    cy.editDaysOfWeek()

    //edit language
    cy.chooseLanguages()

    //chosing the portugueses language
    cy.choosePortuguese()

    //last question
    cy.get('.c-checkbox__label').eq(5).click()
    cy.get('.c-checkbox__label').eq(6).click()
    cy.get('.c-checkbox__label').eq(7).click()

    //save
    cy.get('[name=submit]').click()

    //reset personal information
    cy.get('[data-cy="c-worker-preferences-editable__button"]').click()
    for (let i = 1; i <= 6; i++) {
      cy.get('.c-checkbox__label').eq(i).click()
    }

    //save
    cy.get('[name=submit]').click()
  })

  afterEach(() => {
    cy.logout()
  })
})
