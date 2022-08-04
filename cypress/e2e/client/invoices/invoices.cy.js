import loc from '../../../support/locators/locatorsClient'
import client from '../../../fixtures/client/client.json'

describe('invoices - client', () => {
  beforeEach(() => {
    //log in and click on the menu
    cy.login(client.email, client.password)
    cy.menu()
  })

  it('should allow the client to edit the invoices', () => {
    //go to invoices edit page
    cy.get(loc.invoices.btn_invoices).eq(5).click()

    //edit invoices
    cy.get(loc.invoices.invoices_options).click()
    cy.get(loc.invoices.option_selected).click()

    //save
    cy.get(loc.invoices.save).click()

    //confirmation
    cy.contains(
      loc.invoices.notification,
      'Invoice settings saved successfully',
    ).should('be.visible')
  })

  afterEach(() => {
    cy.logout()
  })
})
