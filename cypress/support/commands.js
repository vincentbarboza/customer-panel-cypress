import loc from '../support/locatorsCommands'
import 'cypress-file-upload'

Cypress.Commands.add('login', (email, password) => {
  //log in
  cy.visit(loc.login.visit)
  cy.get(loc.login.btn_login).click()
  cy.get(loc.login.email).type(email)
  cy.get(loc.login.password).type(password)
  cy.get(loc.login.submit).click()
})

Cypress.Commands.add('menu', () => {
  //go to the menu
  cy.get(loc.menu.btn_menu).click()
})

Cypress.Commands.add('logout', () => {
  //log out
  cy.wait(3000)
  cy.menu()
  cy.get(loc.logout.btn_logout).eq(0).click()
})


Cypress.Commands.add('profilePage', () => {
  //go to the profile edit page
  cy.menu()
  cy.get(loc.profile_page.btn_profile).eq(6).click()
})

Cypress.Commands.add('disableDaysOfTheWeek', () => {
  cy.get(loc.disable_days_week.btn_edit).click()
  cy.get(
    loc.disable_days_week.checkbox_off,
  ).click({ multiple: true })

  cy.get(loc.disable_days_week.checkbox_on).click({
    multiple: true,
  })
})

Cypress.Commands.add('editDaysOfWeek', () => {
  const addPeriod = () => {
    for (let i = 0; i < 7; i++) {
      cy.get(
        loc.edit_days_week.more_time
      )
        .eq(i)
        .click()
    }
  }

  const daysOfWeek = (func1, func2) => {
    const time = [37, 55, 41, 80]
    let i = 0
    let j = 0

    for (i = 0; i < 28; i++) {
      cy.get(loc.edit_days_week.btn_time)
        .eq(i)
        .click()
        .get(`[data-cy="c-dropdown__options__wrapper"] > :nth-child(${time[j]})`)
        .click()
      j++
      if (j == 4) {
        j = 0
      }
    }
  }
  addPeriod()
  daysOfWeek()
  cy.get(loc.edit_days_week.save).click()
})

Cypress.Commands.add('chooseLanguages', () => {
  cy.get(loc.choose_language.checkbox).eq(0).click()
  for (let i = 0; i <= 3; i++) {
    cy.get(loc.choose_language.checkbox).eq(i).click()
  }
})

Cypress.Commands.add('choosePortuguese', () => {
  cy.get(loc.choose_portugues.other_language).click()
  cy.get(loc.choose_portugues.type_portuguese).type('portug')
  cy.get(loc.choose_portugues.select).click()
})

Cypress.Commands.add('lastQuestion', () => {
  for (let i = 0; i <= 2; i++) {
    cy.get(loc.last_question.checkbox)
      .eq(i)
      .click()
  }
})

Cypress.Commands.add('appointments', (message) => {
  //go to appointment page
  cy.get(loc.appointments.btn_appointments).eq(1).click()

  //view schedule
  cy.get(loc.appointments.btn_schedule).click()
  cy.get(loc.appointments.btn_day).click()
  cy.get(loc.appointments.btn_week).click()
  cy.get(loc.appointments.btn_month).click()

  //go to appointment page
  cy.menu()
  cy.get(loc.appointments.btn_appointments).eq(1).click()

  //go to info
  cy.get(loc.appointments.drop_down).click()
  cy.get(
    loc.appointments.show_info,
  ).click()

  //change review (it only works if there is a previously granted review)
  cy.get(loc.appointments.change_score).click()
  cy.get(loc.appointments.review).eq(1).click()
  cy.get(loc.appointments.five_stars)
    .eq(4)
    .click()
  // cy.get('[data-cy="c-dropdown__options__wrapper"] > :nth-child(5)').click()
  cy.get(loc.appointments.text_area).clear().type(message)

  // //save review
  cy.get(loc.appointments.save_review).click()
  cy.get(loc.appointments.confirm_review).click()
  cy.contains('.c-notification__content', 'Review saved successfully').should(
    'be.visible',
  )

  //start chat
  cy.get(loc.appointments.start_chat).eq(0).click()
  cy.get(loc.appointments.message_chat).type('Hi')
  cy.get(loc.appointments.send_message).click()

  //edit chat
  cy.get(loc.appointments.chat_options).click()

  //turn off/on notifications
  cy.get(loc.appointments.state_notifications).eq(1).click()
  cy.get(loc.appointments.state_notifications).eq(1).click()

  //report chat to home works
  cy.get(loc.appointments.report_chat).eq(2).click()

  //close
  cy.get(loc.appointments.close_chat).click()
})
