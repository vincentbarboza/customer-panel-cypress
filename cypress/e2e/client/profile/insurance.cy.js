import loc from '../../../support/locators/locatorsClient'
import client from '../../../fixtures/client/client.json'

describe('insurance on/off - client', () => {
  beforeEach(() => {
    //log in and go to the profile edit page
    cy.login(client.email, client.password)
    cy.profilePage()
  })

  it('should allow the client to turn insurance on and off', () => {
    //turn insurance on
    cy.get(loc.insurance.btn_insurance).click()

    //turn insurance off
    cy.get(loc.insurance.btn_insurance).click()
  })

  afterEach(() => {
    cy.logout()
  })
})
