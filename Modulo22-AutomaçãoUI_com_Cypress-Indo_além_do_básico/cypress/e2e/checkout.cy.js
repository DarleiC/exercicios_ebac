//Page Objects

import checkout from '../support/pages/checkout.page'

describe('Deve fazer o Checkout de um pedido', () => {
    beforeEach(() => {
        cy.visit('product/abominable-hoodie/')
    });

    it('Checkout', () => {
        checkout.addCarrinho()
        checkout.finalizaCompra('Spider','Man','Marvel', 'Brasil', 'Av Brasil', '3100', 'São Paulo', 'São Paulo', '98130000', '11989898998', 'spider@man.com')
        cy.get('.woocommerce-notice').should('contain', 'Obrigado. Seu pedido foi recebido.')
    });
});
