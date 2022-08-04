import loc from '../../../support/locators/locatorsClient'
import client from '../../../fixtures/client/client.json'

describe('requests - client', () => {
  before(() => {
    //log in and click on the menu
    cy.login(client.email, client.password)
    cy.menu()
  })

  it('should allow a client to create a request', () => {
    //go to the request page
    cy.get(loc.requests.btn_request).eq(2).click()

    //create new request
    cy.get(loc.requests.new_request).click()

    //enter personal data
    cy.get(loc.requests.zipcode).clear().type(client.address.zipcode)

    cy.get(loc.requests.house_number).clear().type(client.address.house_number)

    //edit request
    cy.get(loc.requests.hours_plus).click()
    cy.get(loc.requests.hours_minus).click()
    cy.get(loc.requests.date_options).click()
    cy.get(loc.requests.option_selected).click()

    cy.get(loc.requests.frequency).eq(1).click({ multiple: true })

    //disable and enable days of the week
    cy.disableDaysOfTheWeek()

    //edit days of the week
    cy.editDaysOfWeek()

    //edit language
    cy.chooseLanguages()

    //chosing the portugueses language
    cy.choosePortuguese()

    //last question
    cy.lastQuestion()

    //save
    cy.get(loc.requests.save).click()

    //matching
    cy.contains('button', 'Select').click()
    cy.get(loc.requests.next).click()
    cy.get(loc.requests.confirm).click()

    //write message
    cy.get(loc.requests.text).clear().type(client.message_request)

    //confirm
    cy.get(loc.requests.confirm_appointment).click()

  })

  it('should allow a client to delete a request', () => {
    //go to the dashboard
    cy.get(loc.requests.dashboard).click()

    //go to the request page
    cy.menu()
    cy.get(loc.requests.btn_request).eq(2).click()

    //delete a request
    cy.get(loc.requests.close_request).eq(0).click()
    cy.get(loc.requests.save).click()
    cy.contains(loc.requests.notification, 'Request has been closed').should('be.visible')
  })

  after(() => {
    cy.logout()
  })
})
