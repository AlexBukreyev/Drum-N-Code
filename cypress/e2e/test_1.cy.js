const creeds = require ('../../creeds.json');

describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.booking.com/')

    cy.get('.ffd93a9ecb > .abcc616ec7 > .a83ed08757')
      .click();

    cy.get('[data-testid="header-sign-up-button"] > .e4adce92df')
      .click()

    cy.get('#username')
      .type(creeds.mail);
        
    cy.get('button > span')  
      .contains('Continue with email')
      .click({ multiple: true });

    cy.get('#new_password')  
      .type(creeds.pwd) 
      .wait(300)

       
    cy.get('#confirmed_password')
      .type(creeds.pwd) 

    cy.get('button > span')  
      .contains('Create account')
      .click();   

   })
})