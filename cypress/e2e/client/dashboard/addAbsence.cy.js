import loc from '../../../support/locators/locatorsClient'
import client from '../../../fixtures/client/client.json'

//{IMPORTANT} if there is an appointment scheduled for the next day, the test will fail

describe('add absence - client', () => {
  beforeEach(() => {
    //log in
    cy.login(client.email, client.password)
  })

  it('should allow the client to add absence', () => {
    cy.addAbsence()

    //save
    cy.get(loc.absence.save).click()

    //notification
    cy.contains(
      loc.absence.notification,
      'Absence added successfully',
    ).should('be.visible')
  })

  afterEach(() => {
    cy.logout()
  })
})
