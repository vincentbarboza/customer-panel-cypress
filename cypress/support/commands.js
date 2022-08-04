import loc from '../support/locators/locatorsCommands'
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
  cy.wait(5000)
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
    'be.visible')

  //start chat
  cy.get(loc.appointments.start_chat).eq(0).click()
  cy.get(loc.appointments.message_chat).type('Hi')
  cy.get(loc.appointments.send_message).click()

  //edit chat
  cy.get(loc.appointments.chat_options).click()

  //turn off/on notifications
  cy.get(loc.appointments.state_notifications).eq(1).click()
  cy.contains('div', 'Chat notifications are now disabled').should(
    'be.visible')
  cy.get(loc.appointments.state_notifications).eq(1).click()
  cy.contains('div', 'Chat notifications are now enabled').should(
    'be.visible')

  //report chat to home works
  cy.get(loc.appointments.report_chat).eq(2).click()
  cy.contains('div', 'Chat has been reported to Home Works').should(
    'be.visible')

  //close
  cy.get(loc.appointments.close_chat).click()
})

Cypress.Commands.add('editPersonalDetails', (name, middle_name, last_name, date_of_birth) => {
  //click on the link to upload a photo
  cy.get(loc.personal_details.photo).click()

  //go to the personal details edit page
  cy.get(loc.personal_details.btn_details).click()

  // //enter personal data
  cy.get(loc.personal_details.first_name).clear().type(name)
  cy.get(loc.personal_details.middle_name).clear().type(middle_name)
  cy.get(loc.personal_details.last_name).clear().type(last_name)
  for (let i = 0; i < 3; i++) {
    cy.get(loc.personal_details.gender).eq(i).click()
  }
  cy.get(loc.personal_details.date_of_birth).clear().type(date_of_birth)

  // //save
  cy.get(loc.personal_details.save).click()
})

Cypress.Commands.add('editAddresses', (street, house_number, zipcode, city) => {
  //go to the primary address edit page
  cy.get(loc.adresses.primary_adresses).click()

  //enter personal data
  cy.get(loc.adresses.street).clear().type(street)
  cy.get(loc.adresses.house_number).clear().type(house_number)
  cy.get(loc.adresses.zipcode).clear().type(zipcode)
  cy.get(loc.adresses.city).clear().type(city)
  cy.get(loc.adresses.country).click()
  cy.contains(loc.adresses.choose_country.btn, loc.adresses.choose_country.netherlands).click({ force: true })

  //save
  cy.get(loc.adresses.save).click()


  cy.wait(3000)
  //go to the billing address edit page
  cy.get(loc.adresses.billing_adresses).click()

  //enter personal data
  cy.get(loc.adresses.street).clear().type(street)
  cy.get(loc.adresses.house_number).clear().type(house_number)
  cy.get(loc.adresses.zipcode).click().clear().type(zipcode)
  cy.get(loc.adresses.city).click().clear().type(city)
  cy.get(loc.adresses.country).click()
  cy.contains(loc.adresses.choose_country.btn, loc.adresses.choose_country.netherlands).click({
    waitForAnimations: false,
  })

  //save
  cy.get(loc.adresses.save).eq(1).click()
})

Cypress.Commands.add('editPhoneNumbers', (phone_number) => {
  //go to the phone number edit page
  cy.get(loc.phone_numbers.btn_phone_numbers).click()

  //edit phone numbers
  cy.get(loc.phone_numbers.country_code).click()
  cy.get(loc.phone_numbers.code_netherlands).eq(0).click()
  cy.get(loc.phone_numbers.phone_number).clear().type(phone_number)

  // //save
  cy.get(loc.phone_numbers.save).click()
})

Cypress.Commands.add('comunicationPreferences', () => {
  //go to communication preference edit page
  cy.get(loc.comunication_preferences.btn_comunic_preferences).click()

  //choose communication preference
  cy.get(loc.comunication_preferences.personal_contact).eq(1).click()
  cy.get(loc.comunication_preferences.email).eq(0).click()

  // //save
  cy.get(loc.comunication_preferences.save).click()
})

Cypress.Commands.add('notifications', () => {
  //click on notifications
  cy.get(loc.notifications.btn_notifications).click()

  //click on a notification
  cy.get(loc.notifications.click_notification).eq(0).click()
})

Cypress.Commands.add('emailAdresses', (email, email2) => {
  //go to email addresses edit page
  cy.get(loc.email_addresses.btn_email_adresses).click()

  //edit primary email adress
  cy.get(loc.email_addresses.primary_email).clear().type(email)

  //edit billing email adress
  cy.get(loc.email_addresses.billing_email).clear().type(email2)

  //save
  cy.get(loc.email_addresses.save).click()
  cy.wait(3000)
})

Cypress.Commands.add('addAbsence', () => {
  const date = new Date()
  const dateAddAbsence = new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate() + 1,
  )

  //go to add absence page
  cy.get(loc.add_absence.btn_absence).click()

  //add absence
  cy.get(loc.add_absence.btn_date).eq(0).click()
  cy.get(loc.add_absence.fn_period(dateAddAbsence.toDateString()))
    .eq(1)
    .click()
  cy.get(loc.add_absence.fn_period(dateAddAbsence.toDateString()))
    .eq(1)
    .click()

  //add time
  cy.get(loc.add_absence.time).eq(0).click()
  cy.get(loc.add_absence.time_option).first().click()
  cy.get(loc.add_absence.time).eq(1).click()
  cy.get(loc.add_absence.time_option).last().click()

})
