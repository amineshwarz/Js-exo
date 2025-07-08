// ----------------JS Exercice 12-1 Composant: Accordéon ---------------------------------

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
      // Cacher tous les autres contenus
      const allContent = document.querySelectorAll('.accordion-content');
      allContent.forEach(function(item) {
        item.classList.remove('show');
      });
      content.classList.add('show');
    }
  };
});

// -----------------------JS Exercice 12-2 Composant: galerie video avec des boutons à l'aide d'iframe et innerHTML 

// Définir tableaux des vidéos à afficher
const videos = [
  {
    title: 'Vidéo 1',
    url: 'https://www.youtube.com/embed/QusiVkxxpXI'
  },
  {
    title: 'Vidéo 2',
    url: 'https://www.youtube.com/embed/QusiVkxxpXI'
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
  const button = document.createElement('button');
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



// ------------------------------ JS Exercice 12-3 Composant: Carrousel d'images avec des boutons----------

let currentSlide = 0; // Index de la slide actuelle
const pictures = [
  './img/aminePirate.JPG',
  './img/arnaudPirate.JPG',
  './img/jeremiePirate.JPG' 
];

function changeSlide(index) {
  // Calcule l'index de la nouvelle slide
  currentSlide = (currentSlide + index + pictures.length) % pictures.length;

  // Créer le code img avec innerHTML
  const carouselContainer = document.getElementById('carousel-container');
  carouselContainer.innerHTML = `<img src="${pictures[currentSlide]}" class="slide active">`;

  // creation des boutton dans for
  for (let i = 0; i < pictures.length; i++) {
        // Créer des boutons pour naviger prev et next
      const carouselButtons = document.getElementById('carousel-buttons');
      const prevButton = document.createElement('button');
      prevButton.type = "button";
      prevButton.textContent = '<';
      prevButton.onclick = () => changeSlide(-1);
      
    
      const nextButton = document.createElement('button');
      nextButton.type = "button";
      nextButton.textContent = '>';
      nextButton.onclick = () => changeSlide(1); 

      carouselButtons.innerHTML = ''; // Clear previous buttons
      carouselButtons.appendChild(prevButton);
      carouselButtons.appendChild(nextButton);
      
  }
}
// Afficher la première image par défaut
changeSlide(0);













// let currentSlide = 0;

// function changeSlide(direction) {
//     const slides = document.querySelectorAll('.slide');
//     slides[currentSlide].classList.remove('active'); // Cache la slide actuelle

//     // Calcule l'index de la nouvelle slide
//     currentSlide = (currentSlide + direction + slides.length) % slides.length;

//     slides[currentSlide].classList.add('active'); // Affiche la nouvelle slide
// }
