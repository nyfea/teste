"use strict";
var funcionario = {
    nome: "José",
    idade: 30,
    cargo: "Analista"
};
console.log('Funcionario: ', funcionario);
var supervisores = ["Carlos", "Roberta", "Amanda"];
console.log('Supervisores: ', supervisores);
function baterPonto(hora) {
    if (hora <= 8) {
        return "Ponto normal";
    }
    else {
        return "Fora do horário";
    }
}
console.log(baterPonto(7));
