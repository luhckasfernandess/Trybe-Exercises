// Utilizando for, descubra qual o maior valor contido no array e imprima-o

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let bigger = null;
for (let index of numbers) {
    if (bigger < index) {
        bigger = index;
    }
}
console.log(numbers, "\n\nO maior valor é:", bigger);