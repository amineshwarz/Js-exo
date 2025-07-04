// // Utilisation de l'evenement Event
// document.getElementById('mon-bouton').onclick = function(event) {
//     console.log(event);
//   };

// // currentTarget pour récupérer l'élément qui a déclenché l'événement
// var boutons = document.getElementsByTagName('button');
// for (var i = 0; i < boutons.length; i++) {
//   boutons[i].onclick = function(event) {
//     alert('bouton clické: ' + event.currentTarget.innerHTML);
//     // => le contenu du bouton clické va être affiché dans l'alert
//   };
// }


// // Exercice 11-1 (JS - Changer la couleur du parent au clic)


//premier click jaune et bleu, deuxieme rouge, troisieme ca enleve la couleur
// var boutonss = document.getElementsByTagName('button');
// for (var i = 0; i < boutons.length; i++) {
//     // On stocke l'état du clic sur chaque bouton
//     boutons[i].clickCount = 0;
//     boutons[i].onclick = function(event) {
//         var parentDiv = event.target.parentNode;
//         var grandParentDiv = parentDiv.parentNode;
//         // Incrémente le compteur de clics %3 pour remise a zero a la fin
//         this.clickCount = (this.clickCount + 1) % 3;
//         if (this.clickCount === 1) {
//             // Premier clic : jaune et bleu
//             parentDiv.style.backgroundColor = 'yellow';
//             grandParentDiv.style.backgroundColor = 'blue';
//         } else if (this.clickCount === 2) {
//             // Deuxième clic : rouge partout
//             parentDiv.style.backgroundColor = 'red';
//             grandParentDiv.style.backgroundColor = 'red';
//         } else {
//             // Troisième clic : reset
//             parentDiv.style.backgroundColor = '';
//             grandParentDiv.style.backgroundColor = '';
//         }
//     };
// }

// let boutons = document.querySelectorAll('button');
// for (let i = 0; i < boutons.length; i++) {
//     boutons[i].onclick = event => {
//         let pusher = event.target.parentNode; // Récupère le bouton cliqué
//         if (pusher.style.backgroundColor === 'red') {
//             pusher.style.backgroundColor = ''; // Réinitialise la couleur de fond du parent
//             event.target.style.backgroundColor = ''; // Réinitialise la couleur de fond du bouton cliqué
//             pusher.parentNode.style.backgroundColor = '';
//         } else {
//             pusher.style.backgroundColor = 'red'; // Change la couleur de fond du parent
//             event.target.style.backgroundColor = 'green';
//             pusher.parentNode.style.backgroundColor = 'yellow'; // Change la couleur de fond du bouton cliqué        event.currentTarget.parentNode.style.backgroundColor = 'red'; // Change la couleur de fond du parent        event.currentTarget.style.backgroundColor = 'yellow'; // Change la couleur de fond du bouton cliqué
//         };
//     }
// }

//Exercice 11-2 (JS - construire un section html en JavaScript)
let body = document.querySelector('body');


let section = document.createElement('section');
section.id = 'built-section';
body.appendChild(section);


let input = document.createElement('input');
input.type = 'text';
input.id = 'input-text';
input.value = '';
section.appendChild(input);

let button = document.createElement('button');
let textNode = document.createTextNode('Supprimer');
button.appendChild(textNode);
// button.textContent = 'Supprimer';
section.appendChild(button);



button.onclick = function deleteSection (){
    input.value = '';
};








