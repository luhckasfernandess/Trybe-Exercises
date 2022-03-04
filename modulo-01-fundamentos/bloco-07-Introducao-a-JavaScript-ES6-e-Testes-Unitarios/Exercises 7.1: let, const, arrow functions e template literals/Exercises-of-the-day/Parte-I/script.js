const testingScope = escopo => escopo === true ? console.log('Não devo ser utilizada fora do meu escopo (if) Ótimo, fui utilizada no escopo!') : console.log('Não devo ser utilizada fora meu escopo (else)')

testingScope(true);