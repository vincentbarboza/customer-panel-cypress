import client from '../../../fixtures/client/client.json'

describe('insurance on/off - client', () => {
  beforeEach(() => {
    //log in and go to the profile edit page
    cy.login(client.email, client.password)
  })

  it('should allow the client to ', () => {
    // cy.get('.l-headline--primary').debug()

    let test = document.querySelector('.l-headline--primary').innerText


    if (test == 'Good day, Client Cypress1') {
      console.log('Top!')
    } else {
      console.log('Deu errado!')
    }
    // let test3 = () => {
    //   setTimeout(() => {
    //     let test = document.querySelector('.l-headline--primary').innerText
    //     console.log(test)
    //   }, 5000)
    // }
    // test3()

    // cy.contains('h1', 'Good day, Client Cypress1').invoke('text').then(($value) => {
    //   // cy.log($value)
    //   console.log($value)
    // })
  })
})
