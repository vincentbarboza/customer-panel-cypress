import appointmentsData from "../../../fixtures/cleaner/appointments/appointment.Fixture";
import AppointmentsHelper from '../../../Helpers/cleaners/AppointmentsHelper.js';

const appappointmentsHelper = new AppointmentsHelper()

const selectors = {
  scheduleButton: '[data-cy="schedule-btn"]',
  appointmentItemContainer: '[class="c-appointments__item"]',
  dropDownButtonContainer: '[class="c-dropdown c-dropdown--placeholder"]',
  dropDownOptions: '[data-cy="c-dropdown__options__wrapper"]',
  helpDeskButtonContainer: '[class="c-shortcuts c-vertical-nav"]',
  absenceButton: '[data-cy="add-absence-btn"]',
};

describe("Appointments page - cleaner", () => {
  appappointmentsHelper.before()

  it("view schedule button should be working", () => {
    cy.intercept(
      "POST",
      "http/tickets/query/customer-panel:calendar/get-schedule-by-person-id"
    ).as("scheduleById");
    // Click on the view schedule button
    cy.get(selectors.scheduleButton).click();

    cy.wait("@scheduleById", { timeout: 30000 }).its("response.statusCode").should("be.equal", 200);

    cy.url().should("include", "schedule");
  });

  // The dropdown button has 2 option buttons
  appointmentsData.dropDownOptions.forEach((link) => {
    it(`The ${link.buttonName} button inside the dropdown on the appointment page should be working`, () => {
      cy.intercept(
        "POST",
        `http/tickets/query/customer-panel:${link.intercept}`
      ).as('dropdownOptionButton');

      cy.get(selectors.appointmentItemContainer)
        .eq(0)
        .within(() => {
          // Click on the dropdown button
          cy.get(selectors.dropDownButtonContainer).find("svg").click();
        });

      // Click on the button option
      cy.get(selectors.dropDownOptions).find(link.selector).click();

      cy.wait('@dropdownOptionButton', { timeout: 30000 })
        .its("response.statusCode")
        .should("be.equal", 200);
    });
  });

  it("The helpdesk button should be working", () => {
    cy.intercept("GET", "klantenservice/").as("customerService");
    cy.get(selectors.helpDeskButtonContainer)
      .find("a")
      .then((helpDeskButton) => {
        // Simulate the click on the button to avoid error - link opens a new tab
        cy.wrap(helpDeskButton).trigger("click");

        const href = helpDeskButton.prop("href");

        // Use cy.origin to go to another origin url
        cy.origin(href, () => {
          cy.visit("/");
        });

        cy.wait("@customerService", { timeout: 30000 })
          .its("response.statusCode")
          .should("be.equal", 200);
      });
  });

  it("Add absence button should be working", () => {
    cy.intercept(
      "POST",
      "http/tickets/query/customer-panel:absence/list-absences-by-person-id"
    ).as("absenceByPerson");
    cy.get(selectors.absenceButton).click();

    cy.wait("@absenceByPerson", { timeout: 30000 })
      .its("response.statusCode")
      .should("be.equal", 200);
  });
});
