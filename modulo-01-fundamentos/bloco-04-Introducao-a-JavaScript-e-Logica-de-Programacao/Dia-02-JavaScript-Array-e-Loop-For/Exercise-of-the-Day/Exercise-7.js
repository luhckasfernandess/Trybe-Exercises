// Utilizando for, descubra qual o menor valor contido no array e imprima-o

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let smaller = numbers[0]; // Recebe um valor inical da array para comparação

for (let index of numbers) {
    if (smaller > index) { // Procurando o menor valor
        smaller = index;
    }
}
console.log(numbers,"\n\nO menor valor é:",smaller);