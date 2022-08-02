import client from '../../../fixtures/client/client.json'

describe('hours - client', () => {
  beforeEach(() => {
    //log in and click on the menu
    cy.login(client.email, client.password)
    cy.menu()
  })

  it('should allow the client to edit the hours', () => {
    //go to the hours edit page
    cy.get('.c-vertical-nav__item').eq(3).click()

    //edit the hours
    cy.get('button.c-btn-text').click()
    cy.get('.c-form__input > .c-dropdown').click()
    cy.get('.c-combobox__option--selected').click()

    //save
    cy.get('[data-cy="c-btn"]').click()

    //confirmation
    cy.contains(
      '.c-notification__content',
      'Hours settings saved successfully',
    ).should('be.visible')
  })

  afterEach(() => {
    cy.logout()
  })
})
