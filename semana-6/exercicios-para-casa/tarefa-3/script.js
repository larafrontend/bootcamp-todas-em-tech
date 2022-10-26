/**
    Tarefa 03

    1. Solicite o ano de nascimento;
    2. Verifique se a pessoa é maior de idade:
      - caso seja, informe na tela que ela pode comprar bebidas;
      - caso contrário, informe que você não está autorizada a vender álcool para menores.
 */

      let anoNascimento = Number(prompt("Digite seu ano de nascimento!"));

      if (anoNascimento <= 2004) {
        alert("Você está apta a comprar bebidas alcoólicas. Se beber não dirija!");
      } else {
        alert("Você é menor de idade e não pode comprar bebidas alcoólicas. Se contente com refrigerante.")
      }