import client from '../../../fixtures/client/client.json'

describe('requests - client', () => {
  before(() => {
    //log in and click on the menu
    cy.login(client.email, client.password)
    cy.menu()
  })

  it('should allow a client to create and delete a request', () => {
    //go to the request page
    cy.get('.c-vertical-nav__item').eq(2).click()

    //create new request
    cy.get('.c-wishes-list__new-request').click()

    //enter personal data
    cy.get('[name="postcode"]').clear().type(client.address.zipcode)

    cy.get('[name="houseNumber"]').clear().type(client.address.house_number)

    //edit request
    cy.get('.c-numeric-input__plus').click()
    cy.get('.c-numeric-input__minus').click()
    cy.get('[data-cy="starting-date"] > .c-dropdown').click()
    cy.get('[data-cy="c-dropdown__options__wrapper"] > :nth-child(1)').click()

    cy.get('.c-radio__label').eq(1).click({ multiple: true })

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
    cy.get('[name=submit]').click()

    //matching
    cy.contains('button', 'Select').click()
    cy.get('[data-cy="c-btn"] > span').click()
    cy.get('[data-cy="button-confirm"]').click()
    console.log('existe')

    //write message
    cy.get('.c-textarea').clear().type(client.message_request)

    //confirm
    cy.get('[data-cy="c-btn"]').click()

  })

  it('test', () => {
    //go to the dashboard
    cy.get('[data-cy="to-dashboard-btn"]').click()

    //go to the request page
    cy.menu()
    cy.get('.c-vertical-nav__item').eq(2).click()

    //delete a request
    cy.get('[data-cy="c-btn"]').eq(0).click()
    cy.get('[name="submit"]').click()
  })

  after(() => {
    cy.logout()
  })
})
