import loc from "../../../support/locators/locatorsCleaner"
import cleaner from '../../../fixtures/cleaner/cleaner.json'

describe('intake - cleaner', () => {
    beforeEach(() => {
        //log in and go to menu
        cy.visit(loc.intake.intake_page)
    })

    it('should allow the cleaner to create a profile', () => {

        //fill out form
        cy.get(loc.intake.zipcode).type(cleaner.address.zipcode)
        cy.get(loc.intake.house_number).type(cleaner.address.house_number)

        //maximum travel distance and maximum number of hours per week
        cy.maximumTravelAndHours()

        // maximum rate
        cy.maximumRate()

        //disable and enable days of the week
        cy.disableDaysOfTheWeek()

        //edit days of the week
        cy.editDaysOfWeek()

        //edit language
        cy.get(loc.intake.ducth_language).eq(0).click()

        //chosing the portugueses language
        cy.choosePortuguese()

        //last question
        cy.get(loc.intake.last_question).eq(5).click()
        cy.get(loc.intake.last_question).eq(6).click()
        cy.get(loc.intake.last_question).eq(7).click()

        //next step
        cy.get(loc.intake.save).click()

        //introduce yourself
        cy.get(loc.intake.message).type(cleaner.message)

        //confirm
        cy.get(loc.intake.save).click()

        //correct answers
        cy.get(loc.intake.first_name).clear().type(cleaner.name)
        cy.get(loc.intake.last_name).clear().type(cleaner.last_name)
        cy.get(loc.intake.email).clear().type(cleaner.email)
        cy.get(loc.intake.phone).clear().type(cleaner.phone)
        cy.get(loc.intake.password).clear().type(cleaner.password)
        cy.get(loc.intake.password_confirmation).clear().type(cleaner.password)

        //confirm
        cy.get(loc.intake.save).click()


        //notifications
        cy.contains("div", "An account with this e-mail already exists").should("be.visible")
        cy.contains("div", "Remind password").should("be.exist")


    })

    afterEach(() => {

    })
})
