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

let boutons = document.querySelectorAll('button');
for (let i = 0; i < boutons.length; i++) {
    boutons[i].onclick = event => {
        let pusher = event.target.parentNode; // Récupère le bouton cliqué
        if (pusher.style.backgroundColor === 'red') {
            pusher.style.backgroundColor = ''; // Réinitialise la couleur de fond du parent
            event.target.style.backgroundColor = ''; // Réinitialise la couleur de fond du bouton cliqué
            event.target.parentNode.parentNode.style.backgroundColor = '';
        } else {
            pusher.style.backgroundColor = 'red'; // Change la couleur de fond du parent
            event.target.style.backgroundColor = 'green';
            event.target.parentNode.parentNode.style.backgroundColor = 'yellow'; // Change la couleur de fond du bouton cliqué        event.currentTarget.parentNode.style.backgroundColor = 'red'; // Change la couleur de fond du parent        event.currentTarget.style.backgroundColor = 'yellow'; // Change la couleur de fond du bouton cliqué
        };
    }
}