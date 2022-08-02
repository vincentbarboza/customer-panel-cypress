import { eq } from 'lodash'
import client from '../../../fixtures/client/client.json'

describe('phone numbers - client', () => {
  beforeEach(() => {
    //log in and go to the profile edit page
    cy.login(client.email, client.password)
    cy.profilePage()
  })

  //if there is no previously added phone number, the test does not work

  it('should allow the client to edit phone numbers', () => {
    //go to the phone number edit page
    cy.get('[data-cy="c-phone-editable__button"] > svg').click()

    //edit phone numbers
    cy.get('.c-country-code__chevron').click()
    cy.get('[alt="Netherlands"]').eq(0).click()
    cy.get('[placeholder="Phone number"]').clear().type('0611111199')

    // //save
    cy.get('[data-cy="c-btn"]').click()
  })

  afterEach(() => {
    cy.logout()
  })
})
