import cleaner from '../../../fixtures/cleaner/cleaner.json'

describe('savings settings - cleaner', () => {
  beforeEach(() => {
    //log in and go to menu
    cy.login(cleaner.email, cleaner.password)
    cy.menu()
  })

  it('should allow the cleaner to edit savings settings', () => {
    //go to payslips page
    cy.get('.c-vertical-nav__item').eq(5).click()

    //go to savings settings edit page
    cy.get('[data-cy="savings-link"]').click()

    //edit savings settings page
    for (let j = 0; j <= 1; j++) {
      for (let i = 0; i <= 3; i++) {
        cy.get('.c-checkbox__box').eq(i).click()
      }
    }

    //edit amount that is saved each month
    cy.get('.c-numeric-input__button.c-numeric-input__plus')
      .trigger('mousedown')
      .wait(2000)
      .trigger('mouseup')
    cy.get('.c-numeric-input__button.c-numeric-input__minus')
      .trigger('mousedown')
      .wait(2100)
      .trigger('mouseup')

    //save
    cy.get('[data-cy="c-btn"]').click()

    //notification
    cy.contains(
      '.c-notification__content',
      'Hours settings saved successfully',
    ).should('be.visible')
  })

  afterEach(() => {
    cy.logout()
  })
})
