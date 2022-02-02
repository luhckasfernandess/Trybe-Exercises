/* 1. Crie uma variável chamada "weekDay" que recebe a string "quarta-feira". */
let weekDay = "quarta-feira";
/* 2. Implemente condicionais para que:
    2.1 Se nossa variável "weekDay" for "segunda-feira",
        "terça-feira", "quarta-feira", "quinta-feira" ou "sexta-feira",
        imprima "Oba, mais um dia de aprendizado na Trybe >:D".
    2.2 Se for algum dia de fim de semana, imprima "FINALMENTE, descanso merecido UwU". */
if(weekDay === "segunda-feira" || weekDay === "terça-feira" || weekDay === "quarta-feira" || weekDay === "quinta-feira" || weekDay === "sexta-feira") {
    console.log("Oba, mais um dia de aprendizado na Trybe >:D");
}
else if(weekDay === "sabado" || weekDay === "domingo") {
    console.log("FINALMENTE, descanso merecido UwU");
}
else {
    console.log("Erro! 'weekDay' Não é um dia da semana");
}
/* Experimente trocar o valor da string ou até mesmo montar seu próprio algoritmo.
Esse assunto é muito importante para seu aprendizado :). */
