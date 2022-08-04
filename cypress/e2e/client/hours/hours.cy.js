import loc from '../../../support/locators/locatorsClient'
import client from '../../../fixtures/client/client.json'

describe('hours - client', () => {
  beforeEach(() => {
    //log in and click on the menu
    cy.login(client.email, client.password)
    cy.menu()
  })

  it('should allow the client to edit the hours', () => {
    //go to the hours edit page
    cy.get(loc.hours.btn_hours).eq(3).click()

    //edit the hours
    cy.get(loc.hours.edit_hours).click()
    cy.get(loc.hours.hours_options).click()
    cy.get(loc.hours.opotion_selected).click()

    //save
    cy.get(loc.hours.save).click()

    //confirmation
    cy.contains(
      loc.hours.notification,
      'Hours settings saved successfully',
    ).should('be.visible')
  })

  afterEach(() => {
    cy.logout()
  })
})
