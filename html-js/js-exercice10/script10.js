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
function filtrerPays(continant) {
    let pays = document.getElementsByClassName("pays");
    for (let i = 0; i < pays.length; i++) {
        if (continant === 'tous') {
            pays[i].classList.remove("cache"); // Affiche tous les produits
        } else if (pays[i].classList.contains(continant)) {
            pays[i].classList.remove("cache"); // Affiche les produits de la catégorie
        } else {
            pays[i].classList.add("cache"); // Masque les produits qui ne correspondent pas
        }
    }
}




// function filtrerPays(continant) {
//     let pays = document.querySelectorAll('.pays'); // Sélectionne tous les produits
//     pays.forEach(pays=> {
//         if (continant === 'tous') {
//             pays.classList.remove('cache'); // Affiche tous les produits
//         } else if (pays.classList.contains(continant)) {
//             pays.classList.remove('cache'); // Affiche les produits de la catégorie
//         } else {
//             pays.classList.add('cache'); // Masque les produits qui ne correspondent pas
//         }
//     });
// }