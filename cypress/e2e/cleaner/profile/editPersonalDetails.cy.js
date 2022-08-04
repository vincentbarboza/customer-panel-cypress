import cleaner from '../../../fixtures/cleaner/cleaner.json'

describe('edit personal details - cleaner', () => {
    beforeEach(() => {
        //log in and go to the profile edit page
        cy.login(cleaner.email, cleaner.password)
        cy.profilePage()
    })

    it('should allow a cleaner to edit the personal details', () => {
        cy.editPersonalDetails(cleaner.name, cleaner.middle_name, cleaner.last_name, cleaner.date_of_birth)

    })

    afterEach(() => {
        cy.logout()
    })
})
