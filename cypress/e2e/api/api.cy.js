import cleaner from '../../fixtures/cleaner/cleaner.json'

describe('appointments - cleaner', () => {
    beforeEach(() => {
        // cy.login(cleaner.email, cleaner.password)
    })

    it('should allow the cleaner to edit the appointments', () => {
        cy.login(cleaner.email, cleaner.password).then(res => console.log(res))
        // cy.request({
        //     method: 'POST',
        //     url: 'https://mijn-homeworks.ict-works.info//http/sso/oauth/callback',
        //     body: {
        //         username: cleaner.email,
        //         password: cleaner.password,

        //     },
        // }).then(res => console.log(res))


        cy.request({
            method: 'POST',
            url: 'https://mijn-homeworks.ict-works.info/hours',
        }).then(res => console.log(res))
    })

})
