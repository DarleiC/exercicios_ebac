const { mdc, calculaMdc, mdcInvalido } = require('../exer1')

describe('mdc()', () => {
    it('mdc Válido', () => {
        expect(mdc(150, 150)).toBe(150)
    });

    it('mdc Inválido', () => {
        expect(mdc(150, 0)).toBe("Inválido! Não divide por zero")
    });
});

describe('calculaMdc()', () => {
    it('calculaMdc Válido', () => {
        expect(calculaMdc(150, 150)).toBe(150)
    });

    it('calculaMdc Iválido', () => {
        expect(calculaMdc(150, 0)).toBe('Inválido! Não divide por zero')
    });
});

describe('mdcInvalido()', () => {
    it('mdcInvalido com Zero', () => {
        expect(mdcInvalido(150, 0)).toBe('Inválido! Não divide por zero')
    });

    it('mdcInvalido com letra', () => {
        expect(mdcInvalido(150, 'a')).toBe('Inválido! Você não informou números')
    });
});
