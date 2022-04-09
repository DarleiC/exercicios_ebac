/// <reference types="cypress" />
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require('../fixtures/endereco.json')
describe('Funcionalidade Endereços - Faturamente e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
       
    });
    it('Deve fazer cadastro de Faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('Flávio','Araújo','Google', 'Brasil', 'Av Brasil', '3100', 'São Paulo', 'São Paulo', '98130000', '11989898998', 'falvio@teste.com')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

    it('Deve fazer cadastro de Faturamento com sucesso - Usando Arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEndereco[1].nome,
            dadosEndereco[1].sobrenome,
            dadosEndereco[1].empresa,
            dadosEndereco[1].pais,
            dadosEndereco[1].endereco,
            dadosEndereco[1].numero,
            dadosEndereco[1].cidade,
            dadosEndereco[1].estado,
            dadosEndereco[1].cep,
            dadosEndereco[1].telefone,
            dadosEndereco[1].email            
            )
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
    });

});