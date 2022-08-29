/// <reference types="cypress" />

context('Página de Produtos ', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')

    });
    it('Deve selecionar um Produto da lista e adicionar ele ao carrinho', () => {
        cy.get(':nth-child(2) > .page-numbers').click()
            .url().should('contain', 'page/2') // Verifica na URL se esta na página correta
            .get('.product-block').eq(1).click()
    });
    it.only('Deve adicionar o produto no carrinho', () => {
        var quantidade = 3
        cy.get(':nth-child(2) > .page-numbers').click()
            .url().should('contain', 'page/2') // Verifica na URL se esta na página correta
            .get('.product-block')
            .contains('Atomic Endurance Running Tee (V-neck)').click()
            .url().should('contain', 'product/atomic-endurance-running-tee-v-neck') // verifica se esta na página do produto
            .wait(200) // precisei colocar esse timer porque não estava clicando no tamanho
            .get('.button-variable-item-S').click() // Seleciona o Tamanho
            .get('.button-variable-item-Blue').click() // Seleciona a Cor
            .get('.input-text').clear().type(quantidade) // informa a quantidade
            .get('.single_add_to_cart_button').click() // clica em comprar

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade) // verifica a quantidade no carrinho
            .get('.woocommerce-message').should('contain', quantidade + ' × “Atomic Endurance Running Tee (V-neck)” foram adicionados no seu carrinho.') // verifica a quantidade na mensagem de confirmação


    });
    // Atomic Endurance Running Tee (V-neck)




});