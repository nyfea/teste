"use strict";
// string
var nome = 'Random';
console.log(nome);
// numbers
var idade = 19;
console.log(idade);
idade = 850.65;
console.log(idade);
// boolean
var vaiDarBom = true;
console.log(vaiDarBom);
//tipos explicitos
var naoTipificada;
naoTipificada = 22;
console.log(naoTipificada);
naoTipificada = true;
console.log(naoTipificada);
//array
var hobbies = [1, 20, 100, 25];
console.log(hobbies);
console.log(typeof hobbies);
//tuplas
var endereco; // [street, number, complement]
endereco = ["", 11, ""];
console.log(endereco);
//enums
var People;
(function (People) {
    People[People["Ariel"] = 0] = "Ariel";
    People[People["Jon"] = 1] = "Jon";
    People[People["Lil"] = 2] = "Lil";
    People[People["Sage"] = 3] = "Sage";
})(People || (People = {})); // todas as pessoas nessa lista são convertidas em numeros, iniciando pelo 0
var thosePeople = People.Sage;
console.log(typeof thosePeople); // o tipo da variavel é recebido como numer pq ele recebe a posição de "Sage"
//funções
function retornaMeuNome() {
    return nome;
}
console.log(retornaMeuNome());
function sayHi() {
    console.log('Hi there!');
}
sayHi();
function multiply(numA, numB) {
    return numA * numB;
}
console.log(multiply(3, 7));
//tipo função
var calculo;
calculo = multiply;
console.log(calculo(5, 7));
//objetos
var user = {
    name: "Someone",
    age: 15
};
console.log(user);
user = {
    age: 15,
    name: "Random"
};
console.log(user);
var user1 = {
    name: "Someone",
    age: 15
};
console.log(user1);
//Union Types
var theExample = 20;
console.log(theExample);
theExample = "Teste";
console.log(theExample);
