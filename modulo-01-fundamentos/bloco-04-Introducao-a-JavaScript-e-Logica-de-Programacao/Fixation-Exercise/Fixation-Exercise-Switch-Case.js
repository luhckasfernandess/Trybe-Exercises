/* 1. Crie uma variável para armazenar o estado da pessoa candidata no processo seletivo,
    que pode ser: 'aprovada' , 'lista' ou 'reprovada' ; */

const candidatesNote = "aprovada";

/* 2. Crie uma estrutura condicional com o switch/case que irá imprimir as mensagens do
    exercício anterior se o estado da pessoa candidata for 'aprovada' , 'lista' ou 'reprovada'.
    Como default , imprima a mensagem de 'não se aplica' . */

switch(candidatesNote) {
    case "aprovada":
        console.log("Aprovado(a)!");
        break;
    case "lista":
        console.log("Lista de Espera!");
        break;
    case "reprovada":
        console.log("Reprovado(a)!");
        break;
    default:
        console.log("Não se aplica");
}