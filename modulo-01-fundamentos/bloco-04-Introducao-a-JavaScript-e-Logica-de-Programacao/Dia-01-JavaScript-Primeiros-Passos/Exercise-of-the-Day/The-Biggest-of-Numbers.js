/* Faça um programa que retorne o maior de dois números.
Defina no começo do programa duas constantes com os valores que serão comparados. */

const a = 10, b = 20;
console.log("\nMAIOR DE DOIS\n")
console.log("Número 1:",a,"\nNúmero 2:",b);
if(a > b) {
    console.log("O maior dos dois números é: ",a);
}
else if(b > a) {
    console.log("O maior dos dois números é: ",b);
}
else if(a === b) {
    console.log("Não existe maior, os números são iguais");
}
else {
    console.log("Um dos números está inválido!");
}

/* Faça um programa que retorne o maior de três números.
Defina no começo do programa três constantes com os valores que serão comparados. */

const c = 30;
console.log("\nMAIOR DE TRÊS\n")
console.log("Número 1:",a,"\nNúmero 2:",b,"\nNúmero 3:",c);
if(a > b && a > c) {
    console.log("O maior dos dois números é: ",a);
}
else if(b > a && b > c) {
    console.log("O maior dos dois números é: ",b);
}
else if(c > a && c > b) {
    console.log("O maior dos dois números é: ",c);
}
else if(a === b && a === c) {
    console.log("Não existe maior, os números são iguais");
}
else {
    console.log("Um dos números está inválido!");
}