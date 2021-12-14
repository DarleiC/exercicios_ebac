Feature: Configurar produto
    Como cliente da EBAC-SHOP
    Quero configurar meu produto de acordo com meu tamanho e gosto
    e escolher a quantidade
    Para depois inserir no carrinho

    Background: 
    Given Que eu queira configurar meu produto

    Scenario Outline: 1 – Seleções de cor, tamanho e quantidade devem ser obrigatórios
        When eu escolher <cor> e <tamanho>
        And selecionar <quantidade>
        Then deve exbir uma <mensagem>
        Examples:
            | cor    | tamanho | quantidade | mensagem                       |
            | ""     | "P"     | "1"        | "Informe Cor"                  |
            | "AZUL" | ""      | "1"        | "Informe Tamanho"              |
            | "AZUL" | "P"     | ""         | "Informe Quantidade"           |
            | "AZUL" | "P"     | "1"        | "Produto inserido no carrinho" |

    Scenario: 2 – Deve permitir apenas 10 produtos por venda
        When selecionar a quantidade "11"
        Then deve exibir uma mensagem de alerta "Quantidade acima do limite"

    Scenario: 3 –Quando eu clicar no botão “limpar” deve voltar ao estado original
        When Estiver Tamanho e Cor selecionado
        And clicar no botão "limpar"
        Then deve voltar para o estado original (nenhum selecionado)

