import loc from '../../../support/locators/locatorsCleaner'
import cleaner from '../../../fixtures/cleaner/cleaner.json'

describe('edit availability - cleaner', () => {
  beforeEach(() => {
    //log in
    cy.login(cleaner.email, cleaner.password)
  })

  it('should allow the cleaner to edit their availability', () => {
    //go to availability edit page
    cy.get(loc.availability.btn_availability).click()

    //edit maximum distance and hours
    for (let i = 0; i <= 1; i++) {
      cy.get(loc.availability.distance)
        .eq(i)
        .trigger('mousedown', { which: 1, pageX: 200, pageY: 100 })
        .trigger('mousemove', { which: 1, pageX: 200, pageY: 600 })
        .trigger('mouseup')
      cy.get(loc.availability.hours)
        .eq(i)
        .trigger('mousedown', { which: 1, pageX: 900, pageY: 100 })
        .trigger('mousemove', { which: 1, pageX: 900, pageY: 600 })
        .trigger('mouseup')
    }

    //edit minimum rate
    for (let i = 1; i >= 0; i--) {
      cy.get(loc.availability.rate).eq(i).trigger('mousedown')
      cy.wait(2000)
      cy.get(loc.availability.rate).eq(i).trigger('mouseup')
    }

    //disable and enable days of the week
    cy.disableDaysOfTheWeek()

    //edit days of the week
    cy.editDaysOfWeek()

    //save
    cy.get(loc.availability.save).click()

    //notification
    cy.contains(loc.availability.notification, 'Preferences saved successfully').should('be.visible')
  })

  afterEach(() => {
    cy.logout()
  })
})
