// Dado um array numérico qualquer sem valores repetidos, descubra qual é o índice do maior valor e o índice do menor valor
const numeros = [5, 11, 1, 4, 20, 3]

function menorValor(arrNumeros, posicaoInicial){
    let menorIndice = posicaoInicial

    for(let atual = posicaoInicial; atual < arrNumeros.length; atual++){
        if(arrNumeros[atual] < arrNumeros[menorIndice]){
            menorIndice = atual
        }
    }
    return menorIndice
}

function maiorValor(arrNumeros, posicaoInicial){
    let maiorIndice = posicaoInicial

    for(let atual = posicaoInicial; atual < arrNumeros.length; atual++){
        if(arrNumeros[atual] > arrNumeros[maiorIndice]){
            maiorIndice = atual
        }
    }
    return maiorIndice
}

const menor = menorValor(numeros, 0)
const maior = maiorValor(numeros, 0)
console.log(numeros)
console.log(`O Indice com menor valor é: ${ menor } e o valor é = ${ numeros[menor] }`)
console.log(`O Indice com maior valor é: ${ maior } e o valor é = ${ numeros[maior] }`)