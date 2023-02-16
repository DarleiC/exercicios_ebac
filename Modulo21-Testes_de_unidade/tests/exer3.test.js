const { somaDosMultiplos } = require('../exer3')

describe('Soma dos Multiplos de 5 e 7', () => {
    it('Abaixo de 1000', () => {
        expect(somaDosMultiplos(10)).toBe(156361)
    });
});