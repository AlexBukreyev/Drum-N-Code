// https://docs.google.com/spreadsheets/d/16gL6GGTcWDpdvLbiYZ_HswAmsroxr_1whIXtpvDGeW8/edit?gid=645010496#gid=645010496
const creeds = require ('../../creeds.json');

describe('Booking testing ', () => {
  it('TS 3', () => {
    //Pre-Condition
    cy.visit('https://www.booking.com/')

    cy.get('.ffd93a9ecb > .abcc616ec7 > .a83ed08757')
      .click();

    //Steps:
    //Step 1  
    cy.get('[data-testid="header-sign-up-button"] > .e4adce92df')
      .click()

    for ( let i = 0; i < creeds.incorrect_email.length; i++ ) {
          
      //Step 2     
      cy.get('#username')
        .clear()     
        .type(creeds.incorrect_email[i]);

      //Step 3        
      cy.get('button > span')  
        .contains('Continue with email')
        .click({ multiple: true });
  
      cy.get('#username-note')  
        .contains('Make sure the email address you entered is correct. ')   
    }

   })
})