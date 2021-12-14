Feature: Tela de cadastro - Checkout
    Como cliente da EBAC-SHOP
    Quero fazer concluir meu cadastro
    Para finalizar minha compra
    Background:
        Given Que eu queira concluir minha compra

    Scenario Outline: 1 – Deve ser cadastrado com todos os dados obrigatórios, marcado com asteriscos
        When preencher os seguintes campos obrigatórios:
            | Nome               | "Darlei"                 |
            | Sobrenome          | "Castro"                 |
            | País               | "Brasil"                 |
            | Endereço           | "Rua Dois"               |
            | Cidade             | "Santa Maria"            |
            | CEP                | "97050-000"              |
            | Telefone           | "(55) 9 9999-9999"       |
            | Endereço de e-mail | "darleiebac@ebac.com.br" |
        Then Será feito o cadastro

    Scenario: 2 – Não deve permitir campo e-mail com formato inválido. Sistema deve inserir uma mensagem de erro
        When Eu informar o e-mail "darleiebac.com"
        Then O sistema deve mostrar um alerta: "Formato de e-mail inválido!"

    Scenario Outline: 3 – Ao tentar cadastrar com campos vazios, deve exibir mensagem de alerta.
        When tentar cadastrar com campos vazios:
            | Nome               | "Darlei"                 |
            | Sobrenome          | ""                       |
            | País               | "Brasil"                 |
            | Endereço           | ""                       |
            | Cidade             | "Santa Maria"            |
            | CEP                | "97050-000"              |
            | Telefone           | "(55) 9 9999-9999"       |
            | Endereço de e-mail | "darleiebac@ebac.com.br" |
        Then O sistema deve mostrar um alerta: "Há campos obrigatórios vazios, verifique."


