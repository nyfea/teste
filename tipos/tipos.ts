// string
let nome: string = 'Random'
console.log(nome)

// numbers
let idade: number = 19
console.log(idade)
idade = 850.65
console.log(idade)

// boolean
let vaiDarBom: boolean = true
console.log(vaiDarBom)

//tipos explicitos
let naoTipificada: any
naoTipificada = 22
console.log(naoTipificada);
naoTipificada = true
console.log(naoTipificada);

//array
let hobbies: number[] = [1,20,100,25]
console.log(hobbies);
console.log(typeof hobbies);

//tuplas
let endereco: [string, number, string] // [street, number, complement]
endereco = ["", 11, ""]
console.log(endereco);

//enums
enum People{
    Ariel,
    Jon,
    Lil,
    Sage
} // todas as pessoas nessa lista são convertidas em numeros, iniciando pelo 0
let thosePeople = People.Sage
console.log(typeof thosePeople); // o tipo da variavel é recebido como numer pq ele recebe a posição de "Sage"

//funções
function retornaMeuNome(): string {
    return nome
}

console.log(retornaMeuNome());

function sayHi(): void{
    console.log('Hi there!')
}

sayHi()

function multiply(numA: number, numB: number): number {
    return numA*numB
}

console.log(multiply(3, 7));

//tipo função
let calculo: (x: number, y: number) => number
calculo = multiply
console.log(calculo(5,7));

//objetos
let user: { name: string, age: number } = {
    name: "Someone",
    age: 15
}
console.log(user);

user = {
    age: 15,
    name: "Random"
}
console.log(user);

const user1: { name: string, age: number } = {
    name: "Someone",
    age: 15
}
console.log(user1);

// user1 = {
//    name: "Random",
//    age: 15
//}
// se a var for declarada como constante os valores atribuidos ao obj não são mutaveis

//Alias
type Exemplo = { name: string, age: number }

//Union Types
let theExample: number | string = 20
console.log(theExample);
theExample = "Teste"
console.log(theExample);

