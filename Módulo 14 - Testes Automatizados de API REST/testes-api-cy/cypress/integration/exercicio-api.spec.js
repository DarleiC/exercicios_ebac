/// <reference types="cypress" />
import contrato from '../contracts/usuarios.contract'
const pessoas = require('../fixtures/pessoas.json')

before('Limpa os usuarios',() => {
     cy.request('usuarios').then(response => {
          response.body.usuarios.forEach(usuarios => {
               let id = usuarios._id
               if (usuarios.nome !== 'Fulano da Silva')
                    cy.deletaUsuarioOk(id)
          });
    })
});
describe('Testes da Funcionalidade Usuários', () => {
     it('Deve validar contrato de usuários', () => {
          cy.request('usuarios').then(response => {
               return contrato.validateAsync(response.body)
          })
     });
     it('Deve cadastrar um usuário com sucesso', () => {
          cy.cadastrarUsuarioOk(
               pessoas[0].nome, 
               pessoas[0].email, 
               pessoas[0].senha, 
               pessoas[0].administrador)
               .then(response => {
                    cy.log(pessoas[0].nome)
                    expect(response.status).to.equal(201)
                    expect(response.body.message).to.equal('Cadastro realizado com sucesso')
               })
     });
     it('Deve validar um usuário com email inválido', () => {
          cy.cadastrarUsuarioFail(
               pessoas[1].nome, 
               pessoas[1].email, 
               pessoas[1].senha, 
               pessoas[1].administrador)
               .then(response => {
                    cy.log(pessoas[1].email)
                    expect(response.status).to.equal(400)
                    expect(response.body.email).to.equal("email deve ser um email válido")
               })
     });
     it('Deve editar um usuário previamente cadastrado', () => {
          cy.cadastrarUsuarioOk(
               pessoas[2].nome, 
               pessoas[2].email, 
               pessoas[2].senha, 
               pessoas[2].administrador)
               .then(response => {
                    cy.log(pessoas[2].nome)
                    expect(response.status).to.equal(201)
                    expect(response.body.message).to.equal("Cadastro realizado com sucesso")
               })
               .then(response => {
                    let id = response.body._id
                    cy.editaUsuarioOk(id, 
                         pessoas[3].nome, 
                         pessoas[3].email, 
                         pessoas[3].senha, 
                         pessoas[3].administrador)
                         .then(response => {
                              cy.log(pessoas[3].nome)
                              expect(response.status).to.equal(200)
                              expect(response.body.message).to.equal("Registro alterado com sucesso")
                         })
               })
     });
     it('Deve deletar um usuário previamente cadastrado', () => {
          cy.cadastrarUsuarioOk(
               pessoas[4].nome, 
               pessoas[4].email, 
               pessoas[4].senha, 
               pessoas[4].administrador)
               .then(response => {
                    let id = response.body._id
                    let nome = response.body.nome
                    expect(response.status).to.equal(201)
                    expect(response.body.message).to.equal("Cadastro realizado com sucesso")
                    cy.log(pessoas[4].nome)
                    cy.deletaUsuarioOk(id)
                    .then(response => {
                         expect(response.status).to.equal(200)
                         expect(response.body.message).to.equal("Registro excluído com sucesso")
                    })
               })
     });
     it('Deve listar usuários cadastrados', () => {
          cy.request('usuarios').then(response => {
               expect(response.status).to.equal(200)
               expect(response.body.quantidade).to.equal(3)
          })
     });
});



