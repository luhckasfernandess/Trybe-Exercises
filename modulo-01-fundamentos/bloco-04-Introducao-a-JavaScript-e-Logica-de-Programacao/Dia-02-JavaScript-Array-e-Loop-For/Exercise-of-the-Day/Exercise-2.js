/* 
Para o segundo exercício, some todos os valores contidos no array
e imprima o resultado;
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let sum = null; 
for (let index of numbers) {
    sum += index; // sum = sum + index
}
console.log("Soma do Array é: ",sum);