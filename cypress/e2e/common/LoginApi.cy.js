// describe('login api', () => {
//     it('should login with api', () => {
//         cy.request('GET', '/http/sso/?client_id=https%3A%2F%2Fmijn-homeworks.ict-works.info&redirect_uri=https%3A%2F%2Fmijn-homeworks.ict-works.info%2F&error=login_required&error_description=Required+login').then((response) => {
//             cy.request('GET', response.allRequestResponses[0]['Response Headers'].location).then((response2) => {
//                 cy.request({
//                     method: 'POST',
//                     url: '/http/sso/oauth/callback',
//                     body: {
//                         username: 'cleanercypress@cypress.com',
//                         password: '123456'
//                     }
//                 })
//             })
//             // .then((response3) => {
//             //     cy.log(response3)
//             // })
//         })
//     })
// })