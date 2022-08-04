import loc from '../../../support/locators/locatorsClient'
import client from '../../../fixtures/client/client.json'

describe('settings - client', () => {
  beforeEach(() => {
    //log in and click on the menu
    cy.login(client.email, client.password)
    cy.menu()
  })

  it('should allow the client to edit settings', () => {
    //go to the settings page
    cy.get(loc.settings.btn_settings).eq(7).click()

    //edit settings
    cy.get(loc.settings.language_options).click()
    // cy.get(':nth-child(1) > .c-dropdown').click()
    cy.get(loc.settings.language_selected).click()

    //save
    cy.get(loc.settings.save).click()

    //confirmation message
    cy.contains(
      loc.settings.notification,
      'Settings saved successfully',
    ).should('be.visible')
  })

  afterEach(() => {
    cy.logout()
  })
})
