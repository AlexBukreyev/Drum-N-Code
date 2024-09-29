// https://docs.google.com/spreadsheets/d/16gL6GGTcWDpdvLbiYZ_HswAmsroxr_1whIXtpvDGeW8/edit?gid=0#gid=0
const creeds = require ('../../creeds.json');

describe('Booking testing ', () => {
  it('TC 1', () => {
    //Pre-Condition
    cy.visit('https://www.booking.com/')

    cy.get('.ffd93a9ecb > .abcc616ec7 > .a83ed08757')
      .click();

    //Steps:
    //Step 1  
    cy.get('[data-testid="header-sign-up-button"] > .e4adce92df')
      .click()

    //Step 2      
    cy.get('#username')
      .type(creeds.mail);

    //Step 3        
    cy.get('button > span')  
      .contains('Continue with email')
      .click({ multiple: true });

    //Step 4
    cy.get('#new_password')  
      .type(creeds.pwd) 
      .wait(300)

    //Step 5       
    cy.get('#confirmed_password')
      .type(creeds.pwd) 

    //Step 6      
    cy.get('button > span')  
      .contains('Create account')
      .click();   

   })
})