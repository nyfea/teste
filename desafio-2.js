"use strict";
var funcionario1 = {
    supervisores1: ["Ana", "Marcos", "Luiza"],
    baterPonto1: function (hora) {
        if (hora <= 8) {
            return "Ponto Normal";
        }
        else {
            return "Fora do Horário";
        }
    }
};
console.log(funcionario1.supervisores1, funcionario1.baterPonto1(12));
