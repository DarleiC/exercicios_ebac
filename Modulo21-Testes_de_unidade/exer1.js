// Calcule o MDC (máximo divisor comum) entre dois números

function mdc(input1, input2){
    return calculaMdc(input1, input2)
}

function calculaMdc(input1, input2){
    if(input1 === 0 || input2 === 0 || isNaN(input1) || isNaN(input2)){
        return mdcInvalido(input1, input2)
    }
     
    else{ 
        let div1 = input1
        let div2 = input2
        let resto = 0
        while(div2 !=0){
            resto = div1 % div2
            div1 = div2
            div2 = resto
        }

        return div1
    }
}

function mdcInvalido(input1, input2){
    if(input1 === 0 || input2 === 0){
        let frase = "Inválido! Não divide por zero"
        return frase
    }
    else if(isNaN(input1) || isNaN(input2)){
        let frase = "Inválido! Você não informou números"
        return frase
    }
}

// const valor1 = 150
// const valor2 = 0
// console.log(`MDC É: ${mdc(valor1, valor2)}`)

module.exports = { mdc, calculaMdc, mdcInvalido }