/**
    Documentação para consulta
    
    Instruções e declarações
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements
    
    if...else
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/if...else

    Switch
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch

    For
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for

    While
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while
 */


/* 
  1. Elabore um algoritmo que receba uma letra e determine se é uma vogal ou consoante (Faça duas versões deste código, uma utilizando if-else e outra utilizando switch-case);
*/

    let letraEscolhida = prompt("insira uma letra qualquer do alfabeto").toLowerCase();
    
    /*if (letraEscolhida == "a") {
        alert("Você inseriu uma vogal!")
    } else if (letraEscolhida == "b") {
        alert("Você inseriu uma consoante")
    } else if (letraEscolhida == "c") {
        alert("Você inseriu uma consoante")
    } else if (letraEscolhida == "d") {
        alert("Você inseriu uma consoante")
    } else if (letraEscolhida == "e") {
        alert("Você inseriu uma vogal!")
    }
    else {
        alert("Você não digitou nada!")
    }*/

    switch (letraEscolhida) {
        case "a":
        case "e":
        case "i":
        case "o":
        case "u":
            alert("Você inseriu uma vogal");
            break;
        case "b":
        case "c":
        case "d":
        case "f":
        case "g":
            alert("Você inseriu uma consoante")
            break;
        default:
            alert("Você não digitou nada")
    }

// 

/* 
  2. Elabore um algoritmo que receba um número (1-7) e devolva o dia da semana correspondente;
*/

    let numeroEscolhido = prompt("Insira um numero de 1-7");

    if(numeroEscolhido == 1) {
        
        alert("Hoje é domingo!");

    } else if(numeroEscolhido == 2) {
        
        alert("Hoje é segunda!");

    } else if(numeroEscolhido == 3) {
        
        alert("Hoje é terça!");

    } else if(numeroEscolhido == 4) {
        
        alert("Hoje é quarta!");

    } else if(numeroEscolhido == 5) {
       
        alert("Hoje é quinra");

    } else if(numeroEscolhido == 6) {
        
        alert("Hoje é sexta!");

    } else if(numeroEscolhido == 7) {
        alert("Hoje é sábado")
    }

/* 
  3. Elabore um algoritmo que receba dois números e determine qual é o maior entre eles, se ambos os números forem iguais, mostre uma mensagem no console "Os números são iguais";
*/

    let firstNumber = parseInt(prompt("Insira o 1º número"));
    let secondNumber = parseInt(prompt("Insira o 2º número"));

    if(firstNumber > secondNumber) {
        alert("O 1º número inserido é maior que o segundo");
    } else if(firstNumber < secondNumber) {
        alert("O 2º número inserido é maior que o primeiro");
    } else if(firstNumber = secondNumber) {
        alert("O 1º número inserido e o 2º são iguais");
    } else {
        alert("Você não inseriu nenhum número.")
    }

/*
  4. Crie um algoritmo que receba três notas de um aluno, calcule sua média
     e mostre as seguintes mensagens de acordo com cada situação:
  
    Se a media for igual ou maior que 7 - Aprovado
    Se a media for maior e igual a cinco e menor que 7 - Recuperação 
    Se a media for menor que 5 - Reprovado
  
    Alunos aprovados devem ver a mensagem: Parabéns, você foi aprovado, aproveite suas férias!
    Alunos de recuperação devem ver a mensagem: Você está de recuperação!
    Alunos reprovados devem ver a mensagem: Que pena, você foi reprovado.
*/

    let primAvl = parseFloat(prompt("1ª Avaliação - Nota"));
    let segdAvl = parseFloat(prompt("2ª Avaliação - Nota"));
    let tercAvl = parseFloat(prompt("3ª Avaliação - Nota"));

    let somatoria = primAvl + segdAvl + tercAvl;

    let mediaFinal = somatoria / 3;

    if (mediaFinal >= 7) {
        alert("Parabéns, você foi aprovado, aproveite suas férias!");
    } else if (mediaFinal >= 5 && mediaFinal < 7) {
        alert("Você está de recuperação!")
    } else if (mediaFinal < 5) {
        alert("Que pena, você foi reprovado.")
    }

/*
 5. Crie um algoritmo que receba dois números e some todos os números
    começados no primeiro e terminados no segundo

    Faça duas versões deste exercício: usando for e usando while

    Exemplo:
        se os números informados forem 2 e 7, seu programa deve retornar 27,
        pois 2 + 3 + 4 + 5 + 6 + 7 = 27
*/

    let primeiroNumero = Number(prompt("Digite o primeiro número!"));
    let segundoNumero = Number(prompt("Digite o segundo número!"));
    let soma = 0;
    let i = primeiroNumero

    /* for(let i = primeiroNumero; i <= segundoNumero; i++) {
        alert(soma += i);
    }
    */

    while(i && i <= segundoNumero) {
        i++;
        alert(soma += i);
    }