import cleaner from '../../../fixtures/cleaner/cleaner.json'

describe('appointments - cleaner', () => {
  beforeEach(() => {
    //log in and go to menu
    cy.login(cleaner.email, cleaner.password)
    cy.menu()
  })

  it('should allow the cleaner to edit the appointments', () => {
    cy.appointments(cleaner.message_review)
  })

  afterEach(() => {
    cy.logout()
  })
})
