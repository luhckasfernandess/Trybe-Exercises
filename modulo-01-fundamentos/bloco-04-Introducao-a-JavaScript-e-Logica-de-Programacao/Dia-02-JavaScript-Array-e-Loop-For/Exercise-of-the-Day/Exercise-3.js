/* 
Para o terceiro exercício, calcule e imprima a
média aritmética dos valores contidos no array
*/

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let average = null, counter = 0;
for (let index of numbers) {
    average += index;
    counter += 1; // E se eu ñ soubesse quantos valores tem essa array?
}
// average /= counter;
console.log(numbers,"\nMédia Aritmética: ", average/counter);