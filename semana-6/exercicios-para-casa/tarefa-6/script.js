/**
    Tarefa 06

    1. Informe a quantia em dinheiro dada pelo cliente;
    2. Informe o total da conta do cliente;
    3. Exiba uma mensagem com o valor do troco.
 */

    let valorRecebido = parseFloat(prompt("Digite o valor dado pelo cliente!"));

    let totalCompra = parseFloat(prompt("Informe o valor total da compra"));

    let troco = valorRecebido - totalCompra;

    alert(`O troco do cliente é de R$ ${troco}`)