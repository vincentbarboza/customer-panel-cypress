import loc from '../../../support/locators/locatorsClient'
import client from '../../../fixtures/client/client.json'

//it's not included in all.cy.js
describe('delete request - client', () => {
  beforeEach(() => {
    //log in and go to the profile edit page
    cy.login(client.email, client.password)
    cy.menu()
    cy.get(loc.requests.btn_request).eq(2).click()
  })

  it('should allow the client to turn insurance on and off', () => {
    // i < (number of requests that need to be deleted)
    for (let i = 0; i < 100; i++) {
      //delete a request in loop
      cy.get(loc.requests.close_request).eq(0).click()
      cy.get(loc.requests.save).click()
      cy.wait(2000)
    }
  })

  afterEach(() => {
    cy.logout()
  })
})
