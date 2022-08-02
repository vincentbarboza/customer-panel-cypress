import client from '../../../fixtures/client/client.json'

describe('workers - client', () => {
  beforeEach(() => {
    //log in and click on the menu
    cy.login(client.email, client.password)
    cy.menu()
  })

  it('should allow the client to see workers', () => {
    //go to the workers page
    cy.get('.c-vertical-nav__item').eq(4).click()

    //see the worker
    cy.get('.c-connections__item').eq(0).click()
  })

  afterEach(() => {
    cy.logout()
  })
})
