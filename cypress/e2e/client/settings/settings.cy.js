import client from '../../../fixtures/client/client.json'

describe('settings - client', () => {
  beforeEach(() => {
    //log in and click on the menu
    cy.login(client.email, client.password)
    cy.menu()
  })

  it('should allow the client to edit settings', () => {
    //go to the settings page
    cy.get('.c-vertical-nav__item').eq(7).click()

    //edit settings
    cy.get('.c-combobox--wide').click()
    // cy.get(':nth-child(1) > .c-dropdown').click()
    cy.get('.c-combobox__option--selected').click()

    //save
    cy.get('[data-cy="c-btn"]').click()

    //confirmation message
    cy.contains(
      '.c-notification__content',
      'Settings saved successfully',
    ).should('be.visible')
  })

  afterEach(() => {
    cy.logout()
  })
})
