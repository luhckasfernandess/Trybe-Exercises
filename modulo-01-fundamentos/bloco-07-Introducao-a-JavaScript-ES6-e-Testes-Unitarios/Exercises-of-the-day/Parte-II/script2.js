/* Source: https://pt.stackoverflow.com/questions/426836/como-pegar-a-maior-palavra-de-uma-string-em-javascript */

function longestWord(phrase) {
    const arrayStr = phrase.split(' '); // Dividindo a frase utilizando o split e salvando na variavel arrayStr
    let longest = 0;
    let word = null;
    arrayStr.forEach(function(str) { // .forEach vai percorrer o array
            if (longest < str.length) { // Verifica a palavra mais longa
            longest = str.length; // Guarda o tamanho da palavra mais longa (nº inteiro)
            word = str; // Atribui/salva a palavra mais longa
        }
    });
    return word; // Retorna o mais longo
}
console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));
