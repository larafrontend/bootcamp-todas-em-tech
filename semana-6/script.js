/**
    Documentação para consulta
    Variáveis e tipo de dados
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Grammar_and_types
 */


// 1. Crie uma variável que armazene a mensagem "Olá, Mundo!" e a imprima no console

    const saudacao = "Olá, Mundo!";
    console.log(saudacao);

// 2. Crie uma variável que armazene seu nome

    const nome = prompt("Digite seu nome!");

// 3. Crie uma variável que armazene o ano de seu nascimento

    const dataNascimento = prompt("Digite sua data de nascimento!");

// 4. Crie uma variável que indique se hoje foi seu primeiro contato com javascript

    const aulaJs = prompt("Responda se hoje foi seu primeiro contato com Javascript");

// 5. Imprima, no console, seu nome, o ano de seu nascimento
//    e se já teve contato com javascript (usando as variáveis criadas acima!)

    console.log("Olá, eu me chamo " + nome + ", nasci no dia " + dataNascimento + " e hoje foi " + aulaJs);

// 6. Usando a função typeof, imprima no console o tipo das variáveis criadas

    console.log(typeof(nome));
    console.log(typeof(dataNascimento));
    console.log(typeof(aulaJs));

// 7. Crie uma variável sem nenhum valor atribuído e imprima seu valor e seu tipo no console

    let semValorAtribuido;
    console.log(semValorAtribuido);
    console.log(typeof(semValorAtribuido));

// 8. Crie uma variável inicializada com o valor nulo e imprima seu valor e seu tipo no console

    const valorNulo = null;
    console.log(valorNulo);
    console.log(typeof(valorNulo));