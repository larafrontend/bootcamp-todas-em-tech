/**
    Documentação para consulta
    
    Instruções e declarações
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements

    For
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for

    While
    https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/while
 */

/* 
  1. Utilizando a estrutura de repetição for, mostre no console todos números 0 ao 100,
  inclusive esses 2
*/

    for (let i = 0; i <= 100;) {
        console.log(i);
        i++;
    }

/* 
  2. Utilizando a estrutura de repetição for, mostre no console apenas os números pares de 1 ao 50.
  - Números pares são todos os números que divididos por 2 tem resto 0
  - Qual operador que retorna o resto da divisão? Vamos usar ele!
*/


  for (let i = 0; i <= 50; i++) { 

    if ((i % 2) === 0) {
      console.log(i);
    }
  }
/*
  3. Crie um algoritmo que receba dois números e some todos os números
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