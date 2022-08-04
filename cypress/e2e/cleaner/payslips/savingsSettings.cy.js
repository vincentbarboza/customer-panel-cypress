import loc from '../../../support/locators/locatorsCleaner'
import cleaner from '../../../fixtures/cleaner/cleaner.json'
import { settings } from 'cluster'

describe('savings settings - cleaner', () => {
  beforeEach(() => {
    //log in and go to menu
    cy.login(cleaner.email, cleaner.password)
    cy.menu()
  })

  it('should allow the cleaner to edit savings settings', () => {
    //go to payslips page
    cy.get(loc.savings_settings.btn_settings).eq(5).click()

    //go to savings settings edit page
    cy.get(loc.savings_settings.btn_saving_settings).click()

    //edit savings settings page
    for (let j = 0; j <= 1; j++) {
      for (let i = 0; i <= 3; i++) {
        cy.get(loc.savings_settings.reason).eq(i).click()
      }
    }

    //edit amount that is saved each month
    cy.get(loc.savings_settings.amount_plus)
      .trigger('mousedown')
      .wait(2000)
      .trigger('mouseup')
    cy.get(loc.savings_settings.amount_minus)
      .trigger('mousedown')
      .wait(2100)
      .trigger('mouseup')

    //save
    cy.get('[data-cy="c-btn"]').click()

    //notification
    cy.contains(
      loc.savings_settings.notification,
      'Hours settings saved successfully',
    ).should('be.visible')
  })

  afterEach(() => {
    cy.logout()
  })
})
