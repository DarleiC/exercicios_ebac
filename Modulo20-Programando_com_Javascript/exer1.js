// Calcule o MDC (máximo divisor comum) entre dois números

let input1 = 120
let input2 = 150

if(input1 === 0 || input2 === 0 || isNaN(input1) || isNaN(input2)){
    console.log("Nao divide por zero ou valor informado é inválido")
}

else if(input1 !=0 && input2 != 0){
    let div1 = input1
    let div2 = input2
    let resto = 0
    while(div2 !=0){
        resto = div1 % div2
        div1 = div2
        div2 = resto
    }
    console.log(`MDC É: ${div1}`)
}
