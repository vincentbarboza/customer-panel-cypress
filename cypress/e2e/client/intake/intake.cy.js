
import loc from '../../../support/locators/locatorsClient'
import client from '../../../fixtures/client/client.json'

describe('intake - client', () => {
    beforeEach(() => {
        //log in and go to menu
        cy.visit(loc.intake.intake_page)
    })

    it('should allow the client to create a profile', () => {

        //fill out form
        cy.get(loc.intake.zipcode).type(client.address.zipcode)
        cy.get(loc.intake.house_number).type(client.address.house_number)

        // maximum rate
        cy.maximumRate()

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

        //next step
        cy.get(loc.intake.save).click()

        cy.contains('button', 'Select').click()
        cy.get(loc.intake.next_step).click()
        cy.get(loc.intake.continue).click()

        //write message
        cy.get(loc.intake.message).clear().type(client.message_request)

        //confirm
        cy.get(loc.intake.save).click()

        //correct answers
        cy.get(loc.intake.first_name).clear().type(client.name)
        cy.get(loc.intake.last_name).clear().type(client.last_name)
        cy.get(loc.intake.email).clear().type(client.email)
        cy.get(loc.intake.phone).clear().type(client.phone)
        cy.get(loc.intake.password).clear().type(client.password)
        cy.get(loc.intake.password_confirmation).clear().type(client.password)

        //confirm
        cy.get(loc.intake.save).click()


        //notifications
        cy.contains("div", "An account with this e-mail already exists").should("be.visible")
        cy.contains("div", "Remind password").should("be.exist")

    })

})
