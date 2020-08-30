context('Login Tests', () => {

    it('makes a wrong login attemp', () => {
        cy.visit('https://habitica.com')
        cy.get('.sign-up').click();

        cy.get('#usernameInput').type('icedream93').should('have.value', 'icedream93');
        cy.get('[type="email"]').type('sergiox93@hotmail.com');

        cy.get('[placeholder="Password"]').type('metropolis1');

        cy.get('[placeholder="Confirm Password"]').type('metropolis1');

        cy.get('.btn-info[type="submit"]').should('be.disabled')

        cy.contains("Username already taken.").should('be.visible')
      })
});
