context('Create challenge', () => {

    it('makes a wrong login attemp', () => {
        cy.visit('https://habitica.com/login')
        //cy.get('.login-button').click();

        cy.get('#usernameInput').type('icedream93').should('have.value', 'icedream93');
        cy.get('#passwordInput').type('metropolis1');

        cy.get('.btn-info[type="submit"]').click()

        cy.contains("Challenges").click()
        cy.contains("Create Challenge").click()

        cy.get('[placeholder="What is your Challenge name?"]').type('test challenge');
        cy.get('[placeholder="What short tag should be used to identify your Challenge?"]').type('test challenge 2');
        cy.get('.summary-textarea').type('Summary');
        cy.get('.description-textarea').type('desciption');
        cy.get('select').select('Public Challenges')
        cy.contains("None").click()
        cy.contains("None").click()
        cy.get('#challenge-modal-cat-academics').check({force: true})
        cy.contains("Close").click()
        cy.contains("Add Challenge Tasks").click()


    })
});
