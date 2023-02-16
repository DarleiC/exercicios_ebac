//App actions

const data = require('../fixtures/data.json')

describe('Deve criar conta e logar usando AppActions', () => {
        
    it('Login', () => {
        cy.criaConta(data.email, data.password)
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', `Olá, ${data.nome} (não é ${data.nome}? Sair)`)
    });

});