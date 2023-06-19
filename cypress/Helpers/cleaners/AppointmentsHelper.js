import appointmentsData from "../../fixtures/cleaner/appointments/appointment.Fixture.js";

export default class AppointmentsHelper {
    before() {
        let setCookie;

        before(() => {
            cy.loginCleaner();

            // Get the PHPSESSID cookie
            cy.getCookie("PHPSESSID").then((cookie) => {
                setCookie = cookie;
            });
        });

        beforeEach(() => {
            cy.intercept(
                "POST",
                "http/tickets/query/customer-panel:appointment/get-appointments",
                appointmentsData.getAppointments
            ).as("getAppointments");


            // Set the cookie to be logged in 
            cy.setCookie("PHPSESSID", setCookie.value.toString());
            cy.visit("/appointments");

            cy.wait("@getAppointments", { timeout: 30000 });
        })
    }
}