 /*
Aqui você vai modificar os elementos já existentes utilizando apenas as funções:
- document.getElementById()
- document.getElementsByClassName()
- document.getElementsByTagName()
 */

/* 
Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê
daqui a 2 anos. (Não gaste tempo pensando no texto e sim realizando o exercício)
*/

function changeText(tag, text){
    let newText = document.getElementsByTagName(tag);
    // Percorrer essa lista de elementos e mudar a cor de cada um
    for (let index = 0; index < newText.length; index += 1) {
      newText[index].innerText = text;
    }
};

 changeText('p', 'Eu me vejo fazendo mais de R$ 3.500 por mês ha ha')

// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109))

function changeColor (a, b) {
    let newColor = document.getElementsByClassName(a);
    newColor[0].style.background = b;
}

changeColor("main-content", "rgb(76,164,109)")

/* 
 Crie uma função que mude a cor do quadrado vermelho para branco.
 Crie uma função que corrija o texto da tag <h1>.
 Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
 Crie uma função que exiba o conteúdo de todas as tags <p> no console.
*/

