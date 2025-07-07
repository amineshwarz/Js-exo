

// JS Exercice 12-1 Composant: Accordéon 
function accordion() {
 let accordi = document.querySelectorAll('.accordion');
 // Parcourt chaque élément accordéon
 accordi.forEach((item) => {
    // Sélectionne le titre et le contenu de l'accordéon
    let title = item.querySelector('.accordion-title');
    let content = item.querySelector('.accordion-content');
    // Ajoute un écouteur d'événement au titre
    title.addEventListener('click', () => {
        // Vérifie si le contenu est déjà visible
        if (content.style.display === 'block') {
            content.style.display = 'none'; // Cache le contenu
        } else {
            content.style.display = 'block'; // Affiche le contenu
        }
    }
    );
    });
}
document.addEventListener('DOMContentLoaded', accordion());

    





// let currentSlide = 0;

// function changeSlide(direction) {
//     const slides = document.querySelectorAll('.slide');
//     slides[currentSlide].classList.remove('active'); // Cache la slide actuelle

//     // Calcule l'index de la nouvelle slide
//     currentSlide = (currentSlide + direction + slides.length) % slides.length;

//     slides[currentSlide].classList.add('active'); // Affiche la nouvelle slide
// }