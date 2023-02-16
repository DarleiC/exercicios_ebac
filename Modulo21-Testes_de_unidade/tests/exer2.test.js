const { menorValor, maiorValor } = require('../exer2')

describe('menor valor', () => {
    const arr = [5, 11, 1, 4, 20, 3]
    const menor = menorValor(arr, 0)

    it('Indice menor', () => {
        expect(menor).toBe(2)
    });

    it('Menor valor', () => {
        expect(arr[menor]).toBe(1)
    });
});

describe('maior valor', () => {
    const arr = [5, 11, 1, 4, 20, 3]
    const maior = maiorValor(arr, 0)

    it('Indice maior', () => {
        expect(maior).toBe(4)
    });

    it('Maior valor', () => {
        expect(arr[maior]).toBe(20)
    });
});