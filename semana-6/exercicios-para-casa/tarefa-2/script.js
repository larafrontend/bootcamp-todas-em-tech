/**
    Tarefa 02
    1. Solicite o preço de uma mercadoria;
    2. Solicite um percentual de desconto;
    3. Informe ao usuário o valor da mercadoria após o desconto;
    4. Informe ao usuário qual quantia foi economizada por conta do desconto.
 */

    let preco = parseFloat(prompt("Digite o valor do produto!"));

    let desconto = parseFloat(prompt("Digite o valor do desconto!"));

    let valorDesconto = desconto / 100;

    let descontoFinal = preco * valorDesconto;

    let valorFinal = preco - descontoFinal;

    alert (`O produto ficou com um valor final de R$ ${valorFinal}, e você economizou ${descontoFinal}.`)

    


