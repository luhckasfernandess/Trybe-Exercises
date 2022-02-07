// Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado

let array = [];
for (let index = 0; index < 25; index += 1) {
// index = 0 pq o array começa com índice 0, quis deixar o código + simples
    array[index] = index +1; //index +1 pq o array começa do 1 até 25
}
console.log(array);