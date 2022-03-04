/* Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort */

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const inOrder = (a, b) => a - b; //Função para o sort ordenar corretamente o array

console.log(`Os números ${oddsAndEvens.sort(inOrder)} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉