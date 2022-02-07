// Ordene o array numbers em ordem crescente e imprima seus valores

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1){ 
// Marca um valor para começar a comparar
    for (index2 = 0; index2 < index; index2 += 1){
    // Compara os valores desde o inínio do array até o valor marcado
        if (numbers[index] < numbers[index2]){
        // Verifica os valores menores
            let position = numbers[index2];
            numbers[index2] = numbers[index];
            numbers[index] = position;
            // Muda as posições
        }
    }
}
console.log(numbers);