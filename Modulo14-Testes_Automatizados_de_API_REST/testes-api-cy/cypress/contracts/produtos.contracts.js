const { number } = require('joi')
const Joi = require ('joi')

const produtosSchema = Joi.object({
    quantidade: Joi.number(),
    produtos:Joi.array().items({ // Assim para incluir um array na validaçao do contrato
        nome: Joi.string(),
        preco: Joi.number(),
        descricao: Joi.string(),
        quantidade: Joi.number(),
        _id: Joi.string()
    })
})


export default produtosSchema;