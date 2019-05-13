let funcionario: { nome: string, idade: number, cargo: string} = {
    nome: "José",
    idade: 30,
    cargo: "Analista"
}
console.log('Funcionario: ', funcionario);


let supervisores: string[] = ["Carlos", "Roberta", "Amanda"]
console.log('Supervisores: ', supervisores);


function baterPonto(hora: any): any {
    
    if (hora <= 8) {
        return "Ponto normal"
    }
    else {
        return "Fora do horário"
    }
}

console.log(baterPonto(7));

