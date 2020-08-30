context('Creacion de tarea', () => {

    it('Crea tarea diara', () => {
        cy.visit('https://habitica.com/login')
        //cy.get('.login-button').click();

        cy.get('#usernameInput').type('icedream93').should('have.value', 'icedream93');
        cy.get('#passwordInput').type('metropolis1');

        cy.get('.btn-info[type="submit"]').click()

        cy.get('[placeholder="Add a Daily"]').type('Tarea diara de prueba{enter}');
      })
});
