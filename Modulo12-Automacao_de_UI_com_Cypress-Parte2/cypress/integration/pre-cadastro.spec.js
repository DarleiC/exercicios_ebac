/// <reference types="cypress" />
var faker = require('faker');


describe('Funcionalidade Pre cadastro', () => {
    
    beforeEach(() => {
        cy.visit('minha-conta/')
    });
    it('Deve completar o pre cadastro com sucesso', () => {
        let nomeFaker = faker.name.firstName()
        let sobrenomeFaker = faker.name.lastName()
        let emailFaker = faker.internet.userName(nomeFaker) //AQUI ESTA ATRIBUINDO O USERNAME COMO O NAME FAKER
        let dominio = '@ebac.com'
        cy.get('#reg_email').type(emailFaker).type(dominio)
        cy.get('#reg_password').type('Teste123@teste')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomeFaker)
        cy.get('#account_last_name').type(sobrenomeFaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });

    it.only('Deve copletar o pre cadastro com sucesso usando comandos customizados', () => {
        let nomeFaker = faker.name.firstName()
        let emailFaker2 = faker.internet.userName(nomeFaker)
        let dominio = '@ebac.com'
        cy.preCadastro(emailFaker2 + dominio,'senha!@#forte', 'Darlei', 'Castro')
        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });
});