/* Source: http://devfuria.com.br/logica-de-programacao/recursividade-fatorial/ */

const factorial = (N) => N === 0 ? 1 : N * factorial (N-1);
// Função inplícita fatorial recebe um nº inteiro. N é igual a 0? Se sim retorne 1. Se não retorne fatorial dele

console.log(factorial(4));