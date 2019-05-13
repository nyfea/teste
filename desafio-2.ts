let funcionario1: {
    supervisores1: string[], baterPonto1: (hora: number) => string
} = {
    supervisores1: ["Ana", "Marcos", "Luiza"],
    baterPonto1(hora: number): string {
        if (hora <= 8) {
            return "Ponto Normal"
        }
        else {
            return "Fora do Horário"
        }
    }
}
console.log(funcionario1.supervisores1,funcionario1.baterPonto1(12));
