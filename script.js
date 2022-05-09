/*
    criar uma lista de estudantes e, cada estudante dentro dessa lista, deverá conter os seguintes dados:
    -nome;
    -nota da primeira prova = PP
    -nota da segunda prova = SP

    calucular a media
    E fazer com que mensagem do aluno seja diferente caso tenha tirado menor que 7

    nome, joão, leticia, diego, julia

*/


const students = [
    {
        name: "João",
        PP: 6,
        SP: 6,
    },
    {
        name: "Letícia",
        PP: 10,
        SP: 9,
    },
    {
        name: "Diego",
        PP: 8,
        SP: 10,
    },
    {
        name: "Julia",
        PP: 4.5,
        SP: 5.5,
    },
]

let pass 

function average(PP, SP, name){
    let averageCalc = ((PP + SP)/2)
    pass = averageCalc >= 7 ? `Parabéns, ${name} Você foi aprovado(a) no concurso!` : `Não foi dessa vez, ${name} Tente novamente!`
    return averageCalc
}

function print(student){
    return `A media do(a) aluno(a) ${student.name} é: ${average(student.PP, student.SP, student.name)}
${pass}`
}

for (let student of students){
    let mensagem = print(student)
    alert(mensagem)
}
