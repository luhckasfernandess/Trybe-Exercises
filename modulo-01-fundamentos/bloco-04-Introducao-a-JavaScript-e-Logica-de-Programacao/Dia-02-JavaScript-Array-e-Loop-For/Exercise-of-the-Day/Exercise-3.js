/* 
Para o terceiro exercício, calcule e imprima a
média aritmética dos valores contidos no array

A média aritmética é o resultado da soma de
todos os elementos divido pelo número total
de elementos.
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let average = null, counter = 0;
for (let index of numbers) {
    average += index;
    counter += 1; // E se ñ soubesse quantos valores tem essa array?
}
// average /= counter;
console.log(numbers,"\nMédia Aritmética: ", average/counter);