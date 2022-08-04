import loc from '../../../support/locators/locatorsCleaner'
import cleaner from '../../../fixtures/cleaner/cleaner.json'


//{IMPORTANT} if there is an appointment scheduled for the next day, the test will fail


describe('add absence - cleaner', () => {
  beforeEach(() => {
    //log in
    cy.login(cleaner.email, cleaner.password)
  })

  it('should allow the cleaner to add absence', () => {
    cy.addAbsence()

    //choosing reason
    for (let i = 0; i < 3; i++) {
      cy.get(loc.add_absence.reason).eq(i).click()
    }

    //save
    cy.get(loc.add_absence.save).click()

    //notification
    cy.contains(
      loc.add_absence.notification,
      'Absence added successfully',
    ).should('be.visible')
  })

  afterEach(() => {
    cy.logout()
  })
})
