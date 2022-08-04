import loc from '../../../support/locators/locatorsClient'
import client from '../../../fixtures/client/client.json'

describe('payment mothod - client', () => {
  beforeEach(() => {
    //log in and go to the profile edit page
    cy.login(client.email, client.password)
    cy.profilePage()
  })

  it('should allow the client to edit the payment method', () => {
    //go to payment method edit page
    cy.get(loc.payment_method.btn_payment_method).click()

    //edit payment method
    cy.get(loc.payment_method.aumotamitc_payment).eq(0).click()
    cy.get(loc.payment_method.bank_account).clear().type(client.bank_account)
    cy.get(loc.payment_method.ideal).eq(1).click()

    //save
    cy.get(loc.payment_method.save).click()
  })

  afterEach(() => {
    cy.logout()
  })
})
