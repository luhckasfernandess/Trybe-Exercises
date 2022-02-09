/* 
Para praticar, substitua todas as funções que você usou no exercício anterior
por querySelector e/ou querySelectorAll. Além disso, vamos consolidar a
manipulação dos elementos HTML , colocando a cor do
Administrador de Tempo da Trybe como na imagem abaixo usando apenas o JavaScript!
*/

const timeAdministrator = document.querySelector("h1");
timeAdministrator.style.backgroundColor = "rgba(0,176,105,255)";
const emergencyTasks = document.querySelector(".emergency-tasks");
emergencyTasks.style.backgroundColor = "rgba(255,159,132,255)";
const noEmergencyTasks = document.querySelector(".no-emergency-tasks");
noEmergencyTasks.style.backgroundColor = "rgba(249,219,94,255)";
const Tags = document.querySelectorAll("h3");
Tags[0].style.backgroundColor = "rgba(165,0,243,255)";
Tags[1].style.backgroundColor = "rgba(165,0,243,255)";
Tags[2].style.backgroundColor = "rgba(35,37,37,255)";
Tags[3].style.backgroundColor = "rgba(35,37,37,255)";