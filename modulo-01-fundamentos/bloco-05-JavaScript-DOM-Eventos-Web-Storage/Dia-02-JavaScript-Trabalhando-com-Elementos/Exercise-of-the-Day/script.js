// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body 

function addElement (element, tag, text) {
    let callElement = document.getElementsByTagName(element);
    let newElement =  document.createElement(tag);
    let addInfoElement = newElement.innerText = text;
    let addElement = callElement.appenChild(createElemet);
    return addElement;

}
addElement("body","h1","Exercício 5.2")