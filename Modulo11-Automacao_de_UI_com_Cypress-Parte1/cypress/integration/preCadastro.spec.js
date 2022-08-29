/// <reference types="cypress" />
var faker = require('faker-br'); // biblioteca Faker BR

context('Fazer um cadastro de usuário', () => {
    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    it('Deve completar os dados para o cadastro', () => {
        var nameFaker = faker.name.firstName()
        var sobrenomeFaker = faker.name.lastName()
        var emailFaker = faker.internet.userName(nameFaker) //AQUI ESTA ATRIBUINDO O USERNAME COMO O NAME FAKER
        var dominio = '@ebac.com' //DEFININDO UM DOMINIO PADRÃO PARA FACILITAR ANÁLISE FUTURA

        cy.get('#reg_email').type(emailFaker + dominio) // concatenando o email com o dominio
            .get('#reg_password').type('Teste123@teste')
            .get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
            .get('#account_first_name').type(nameFaker)
            .get('#account_last_name').type(sobrenomeFaker)
            .get('.woocommerce-Button').click()
            .get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso.')
    });



});