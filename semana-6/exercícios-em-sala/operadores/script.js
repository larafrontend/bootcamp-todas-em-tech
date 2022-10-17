/**
    Documentação para consulta
    
    Expressões e operadores
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Expressions_and_Operators

    Objetos globais
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects

    Window
    https://developer.mozilla.org/pt-BR/docs/Web/API/Window
 */


// 1. Receba dois números por meio do prompt

    let firstNumber = prompt("Digite o primeiro número!");
    let secondNumber = prompt("Digite o segundo número!");

// 2. Informe na tela a soma desses números

    let soma = parseInt(firstNumber) + parseInt(secondNumber);
    alert("A soma de " + firstNumber + " + " + secondNumber + " é igual a " + soma);

// 3. Informe o resultado da subtração desses números

    let subtracao = firstNumber - secondNumber;
    alert("A subtração de " + firstNumber + " - " + secondNumber + " é igual a " + subtracao);

// 4. Informe o produto desses números

    let produto = firstNumber * secondNumber;
    alert("O produto de " + firstNumber + " x " + secondNumber + " é igual a " + produto);

// 5. Receba dois números inteiros por meio do prompt

    let firstIntNumber = parseInt(prompt("Digite o primeiro número!"));
    let secondIntNumber = parseInt(prompt("Digite o segundo número!"));

// 6. Informe o resultado da divisão do primeiro pelo segundo

    let divisao = firstIntNumber / secondIntNumber;
    alert("O produto de " + firstIntNumber + " / " + secondIntNumber + " é igual a " + divisao);

// 7. Informe o resto da divisão do primeiro pelo segundo

    let resto = firstIntNumber % secondIntNumber;
    alert("O resto de " + firstIntNumber + " % " + secondIntNumber + " é igual a " + resto);