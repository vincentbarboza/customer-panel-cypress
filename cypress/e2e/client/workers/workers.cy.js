import loc from '../../../support/locators/locatorsClient'
import client from '../../../fixtures/client/client.json'

describe('workers - client', () => {
  beforeEach(() => {
    //log in and click on the menu
    cy.login(client.email, client.password)
    cy.menu()
  })

  it('should allow the client to see workers', () => {
    //go to the workers page
    cy.get(loc.workers.btn_workers).eq(4).click()

    //see the worker
    cy.get(loc.workers.view_worker).eq(0).click()
  })

  afterEach(() => {
    cy.logout()
  })
})
