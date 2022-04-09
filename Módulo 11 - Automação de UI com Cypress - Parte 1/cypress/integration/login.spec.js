/// <reference types="cypress" />

context('Deve fazer Login na plataforma da EBAC', () => {

    /// Para fazer o Login use: aluno_ebac@teste.com / teste@teste.com
    var username = 'aluno_ebac@teste.com'
    var password = 'teste@teste.com'

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    it('Logar com sucesso', () => {
        cy.get('#username').type(username)
            .get('#password').type(password)
            .get('.woocommerce-form > .button').click()
            .get('a > .hidden-xs').should('contain', 'Welcome aluno_ebac !')
            .get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, aluno_ebac (não é aluno_ebac? Sair)')
    });

    it('Errando o username, deve exibir uma mensagem de usarname ou e-mail desconhecido', () => {
        cy.get('#username').type(username + 'erro')
            .get('#password').type(password)
            .get('.woocommerce-form > .button').click()
            .get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(1) > a').should('contain', 'Sign up') // Se esse OK é porque não logou de fato
            .get('.woocommerce-error').should('contain', 'Endereço de e-mail desconhecido. Verifique novamente ou tente seu nome de usuário.')
    });
    it('Errando a senha, deve exibir mensagem de senha errada', () => {
        cy.get('#username').type(username)
            .get('#password').type(password + 'erro')
            .get('.woocommerce-form > .button').click()
            .get('.topbar-inner > :nth-child(1) > .list-inline > :nth-child(1) > a').should('contain', 'Sign up') // Se esse OK é porque não logou de fato
            .get('.woocommerce-error').should('contain', 'Erro: A senha fornecida para o e-mail aluno_ebac@teste.com está incorreta. Perdeu a senha?')
    });

});

