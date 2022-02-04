/* 
Utilizando o array criado no exercício anterior 
imprima o resultado da divisão de cada um dos elementos por 2
*/

let array = [];
for (let index = 0; index < 25; index += 1) {
// index = 0 pq o array começa com índice 0, quis deixar o código + simples
    array[index] = index +1; //index +1 pq o array começa do 1 até 25
}
console.log("\nArray\n",array);

for (let index = 0; index < 25; index += 1) {
    array[index] = (index +1) /2; 
}
console.log("\nDivisão dos Elementos por 2\n",array);