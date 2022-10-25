const horario = 19;

if (horario >= 0 && horario < 6) {
    console.log("madrugada");
} else if (horario >= 6 && horario < 12) {
    console.log("manhã");
} else if (horario >= 12 && horario < 18) {
    console.log("tarde");
} else if (horario >= 18 && horario < 24) {
    console.log("noite");
} else {
    console.log("horário não existe");
}


horario < 18 ? console.log("dia") : console.log("noite");


let regiao = "centro-oeste";

switch (regiao) {
  case "nordeste":
    console.log("possui 9 estados");
    break;
  case "norte":
    console.log("possui 7 estados");
    break;
  case "centro-oeste":
    console.log("possui 3 estados e DF");
    break;
  case "sudeste":
    console.log("possui 4 estados");
    break;
  case "sul":
    console.log("possui 3 estados");
    break;
  default:
    console.log("Região inexistente.")
}