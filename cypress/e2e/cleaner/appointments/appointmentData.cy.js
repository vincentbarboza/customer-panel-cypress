import appointmentsData from "../../../fixtures/cleaner/appointments/appointment.Fixture";
import AppointmentsHelper from "../../../Helpers/cleaners/AppointmentsHelper";

const appappointmentsHelper = new AppointmentsHelper()

describe("Appointments page - cleaner", () => {
    appappointmentsHelper.before()

    const clientData = [appointmentsData.client.name, appointmentsData.client.appointmentTime]
    clientData.forEach((clientData, index) => {
        it('The client name should be visible', () => {
            cy.get('[class="c-appointments__section"]').eq(index).within(() => {
                cy.get('[class="c-appointments__value"]').should('have.text', clientData)
            })
        })
    })
})