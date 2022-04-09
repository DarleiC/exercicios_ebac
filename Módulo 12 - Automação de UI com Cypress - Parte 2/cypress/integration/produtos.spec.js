/// <reference types="cypress" />

describe('Funcionalidade Página de Produtos', () => {

    beforeEach(() => {
        cy.visit('produtos/')
    });
    it('Deve selecionar um produto da Lista', () => {
        cy.get('[class="product-block grid"]')
            //.first() //PEGA O PRIMEIRO ITEM DA LISTA
            //.last() //PEGA O ULTIMO ITEM DA LISTA
            //.eq(3) //PEGA UM ITEM ESPECÍFICO DA LISTA
            .contains('Ariel Roll Sleeve Sweatshirt')
            .click()
    });
    it('Deve adicionar um produto ao carrinho', () => {
        var quantidade = 3

        cy.get('[class="product-block grid"]')
            .contains('Ariel Roll Sleeve Sweatshirt').click()
        cy.wait(200)
        cy.get('.button-variable-item-M').click()
        cy.get('.button-variable-item-Green').click() // Mudei para Green, porque o Purple estava fora de estoque
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar produtos ao carrinho - Usando produtos customizado', () => {
        cy.addProdutos('Aero Daily Fitness Tee', 'M', 'Black', 3)
    });

    it('Deve adicionar produtos ao carrinho - Usando produtos customizado', () => {
        cy.addProdutos('Ariel Roll Sleeve Sweatshirt', 'XS', 'Red', 5)
    });
});