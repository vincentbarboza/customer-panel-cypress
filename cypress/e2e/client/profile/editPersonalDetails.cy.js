import client from '../../../fixtures/client/client.json'

describe('edit personal details - client', () => {
  beforeEach(() => {
    //log in and go to the profile edit page
    cy.login(client.email, client.password)
    cy.profilePage()
  })

  it('should allow a client to edit the personal details', () => {
    //click on the link to upload a photo
    cy.get('.c-photo-upload__button > span').click()

    //go to the personal details edit page
    cy.get('[data-cy="c-personal-data-editable__button"] > svg').click()

    // //enter personal data
    cy.get('[data-cy="c-first-name__input"]').clear().type(client.name)
    cy.get('[data-cy="c-middle-name__input"]').type(client.middle_name).clear()
    cy.get('[data-cy="c-last-name__input"]').clear().type(client.last_name)
    cy.get('.c-radio__label').eq(0).click()
    cy.get('.c-radio__label').eq(1).click()
    cy.get('.c-radio__label').eq(2).click()
    cy.get('[name="dateOfBirth"]').clear().type(client.date_of_birth)

    // //save
    cy.get('[data-cy="c-btn"]').click()
  })

  afterEach(() => {
    cy.logout()
  })
})
