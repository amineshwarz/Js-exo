// JS Exercice 12-1 Composant: Accordéon 

// Sélectionner tous les éléments avec la classe 'accordion-title'
const allTitle = document.querySelectorAll('.accordion-title');

// Parcourir chaque header et ajouter un gestionnaire d'événement click
allTitle.forEach(function(title) {
  title.onclick = function() {
    // 'this' fait référence à l'élément header cliqué (scope géré par function)
    const content = this.nextElementSibling;

    // Toggle la classe 'show' pour afficher ou cacher le contenu
    if (content.classList.contains('show')) {
      content.classList.remove('show');
    } else {
      content.classList.add('show');
    }
  };
});

// JS Exercice 12-2 Composant: galerie video avec des boutons à l'aide d'iframe et innerHTML 

// Définir tableaux des vidéos à afficher
const videos = [
  {
    title: 'Vidéo 1',
    url: 'https://www.youtube.com/embed/daWr9xnkKS4'
  },
  {
    title: 'Vidéo 2',
    url: 'https://www.youtube.com/embed/CyWGhmTWHM8'
  },
  {
    title: 'Vidéo 3',
    url: 'https://www.youtube.com/embed/QusiVkxxpXI'
  }
];

const videoContainer = document.getElementById('video-container');
const buttonContainer = document.getElementById('video-buttons');

// Fonction pour afficher une vidéo dans l'iframe
function changeVideo(index) {
  // Créer le code iframe avec innerHTML
  videoContainer.innerHTML = `<iframe width="560" height="315" src="${videos[index].url}" frameborder="0" allowfullscreen></iframe>`;
}

// Créer des boutons pour chaque vidéo
videos.forEach((video, index) => {
  let button = document.createElement('button');
  button.textContent = video.title;
  //Lorsqu'on clique, la fonction 'changeVideo' est appelée avec l'index de la vidéo correspondante, ce qui met à jour la vidéo affichée.
  // button.onclick = function() {
  //   changeVideo(index);
  // }
  button.onclick = () => changeVideo(index);
  buttonContainer.appendChild(button);
});

// Afficher la première vidéo par défaut
changeVideo(0);













// let currentSlide = 0;

// function changeSlide(direction) {
//     const slides = document.querySelectorAll('.slide');
//     slides[currentSlide].classList.remove('active'); // Cache la slide actuelle

//     // Calcule l'index de la nouvelle slide
//     currentSlide = (currentSlide + direction + slides.length) % slides.length;

//     slides[currentSlide].classList.add('active'); // Affiche la nouvelle slide
// }
