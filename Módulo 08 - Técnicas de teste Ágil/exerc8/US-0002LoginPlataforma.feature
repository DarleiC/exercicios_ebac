Feature: Login na Plataforma
    Como cliente da EBAC-SHOP
    Quero fazer o login (autenticação) na plataforma
    Para visualizar meus pedidos

    Background:
        Given Que eu acesse a página de Login na plataforma EBAC-SHOP

    Scenario: 1 – Ao inserir dados válidos deve ser direcionado para a tela de checkout
        When Eu digitar o Username "darlei@ebac.com.br"
        And o Password "123!@#"
        Then deve direcionar para a tela de checkout

    Scenario Outline: 2 – Ao inserir um dos campos inválidos deve exibir uma mensagem de alerta “Usuário ou senha inválidos”
        When Eu digitar o <Username>
        And o Password <Password>
        Then deve mostrar uma mensagem de alerta <message>
        Examples:
            | Username                 | Password | message                             |
            | "darlei@ebac.com.br"     | "123"    | "Usuário ou Senha não correspondem" |
            | "darleiebac@ebac.com.br" | "123!@#" | "Usuário não encontrado"            |

