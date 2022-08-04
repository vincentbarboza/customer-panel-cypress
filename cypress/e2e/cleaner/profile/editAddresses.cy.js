import cleaner from '../../../fixtures/cleaner/cleaner.json'

describe('edit the addresses - cleaner', () => {
    beforeEach(() => {
        //log in and go to the profile edit page
        cy.login(cleaner.email, cleaner.password)
        cy.profilePage()
    })

    it('should allow a cleaner to edit the addresses', () => {
        cy.editAddresses(cleaner.address.street, cleaner.address.house_number, cleaner.address.zipcode, cleaner.address.city)

    })

    afterEach(() => {
        cy.logout()
    })
})
