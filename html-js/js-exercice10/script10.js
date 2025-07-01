// Exercice 10-1 (JS - Cacher un élément)
        // let cacher = document.getElementById('deuxieme');
        // cacher.classList.add("hidden");

// Exercice 10-2 (JS - Spoiler)
// document.getElementById('btn').onclick = function antiSpoile() {
//     let cacher = document.getElementsByClassName('spoil');
//     for (let i = 0; i < cacher.length; i++) {
//         cacher[i].classList.add("hidden");
//     }
// }

// Exercice 10-3 (JS - Surbillance au clic)
let test = document.getElementsByTagName("p"); 
for (let i = 0; i < test.length; i++) {
    test[i].onclick = function surbillance(e) { 
        e.target.style.backgroundColor = e.target.style.backgroundColor === "yellow" ? "white" : "yellow";
        // if (test[i].style.backgroundColor === "yellow") {
        //     test[i].style.backgroundColor = "white";
        // } else {
        //     test[i].style.backgroundColor = "yellow";
        // } 
    }
}
function aa() { // on appui sur le boutton et tout les paragraphes deviennent jaune
    let pp = document.getElementsByTagName("p");
    for (let i = 0; i < pp.length; i++) {
        pp[i].style.backgroundColor = "yellow"; 
    }

}
// Exercice 10-4 (JS - Fitrage par catégorie)
// function filtreItems() {
//     let items = document.querySelector("item");
//     let categorie = "fruit";
    
//     for (let i = 0; i < items.length; i++) {
//         if (items[i].classList.contains(categorie)) {
//             items[i].style.display = "block"; // Affiche l'élément
//         }
//         else {
//             items[i].style.display = "none"; // Cache l'élément
//         }
//     }
//     console.log(items);
//     console.log(categorie);

// }

// Exercice Ajax 1 (Ajax - Charger et afficher un texte)
function chargerTexte() {
    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    fetch('./texte.txt')
    .then(response => response.text()) // transforme la réponse en objet JS
    .then(data => {
        // alert(`  (Numero utilisateur)) : ${data.userId}\n(Numero) : ${data.id}\n(Titre) : ${data.title}\n(Contenu) : ${data.body}`); 
        alert(`Contenu du fichier : ${data}`);
    })
    .catch(error => {
        console.error('Erreur AJAX :', error);
    });
    }

// Exercice Ajax 2 (Charger et afficher des utilisateurs)
function chargerUtilisateurs() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            const ul = document.getElementById('listeUtilisateurs'); // Crée un élément <ul>
            ul.innerHTML = '';
            data.forEach(user => {
                const li = document.createElement('li'); // Crée un élément <li> pour chaque utilisateur
                li.textContent = `Nom : ${user.name}, Email : ${user.email}`;
                ul.appendChild(li); // Ajoute le <li> à la <ul>
            });
        }).catch(error => {
            console.error('Erreur lors de la récupération des utilisateurs :', error);
        });
}

