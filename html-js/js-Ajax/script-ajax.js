// ------------------------Exercice Ajax 1 (Ajax - Charger et afficher un texte)----------------------

function chargerTexte() {
    // fetch('https://jsonplaceholder.typicode.com/posts/1')
    fetch('./texte.txt')
    .then(response => response.text()) // transforme la réponse en objet JS
    .then(data => {
        // alert(`  (Numero utilisateur)) : ${data.userId}\n(Numero) : ${data.id}\n(Titre) : ${data.title}\n(Contenu) : ${data.body}`); 
        // alert(`Contenu du fichier : ${data}`);

        const div = document.getElementById('zoneTexte'); // Sélectionne l'élément <div> où afficher le texte
        div.textContent = data; // Met le texte récupéré dans la <div>
    })
    .catch(error => {
        console.error('Erreur AJAX :', error);
    });
    }



//--------------------------- Exercice Ajax 2 (Charger et afficher des utilisateurs)----------------------

function chargerUtilisateurs() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            const ul = document.getElementById('listeUtilisateurs'); // Crée un élément <ul>
            ul.innerHTML = '';
            data.forEach(user => {
                const li = document.createElement('li'); // Crée un élément <li> pour chaque utilisateur
                li.innerHTML = `<h3>Nom :</h3>\u00A0 ${user.name},\u00A0\u00A0<h3>Email : \u00A0</h3>${user.email}`;
                ul.appendChild(li); // Ajoute le <li> à la <ul>
            });
        }).catch(error => {
            console.error('Erreur lors de la récupération des utilisateurs :', error);
        });
}


// -----------------------------------Exercice Ajax 3 (Charger et afficher un post )----------------------

function chargerPost() {
    fetch('https://jsonplaceholder.typicode.com/posts/2')
        .then(response => response.json())
        .then(data => {
            const post = document.getElementById('post'); // Sélectionne l'élément <div> où afficher le post
            post.innerHTML = `<h2>${data.title}</h2><br><p>${data.body}</p>`; // Met le titre et le contenu du post dans la <div>
        })
        .catch(error => {
            console.error('Erreur lors de la récupération du post :', error);
        });
}

//---------------------------------- Exercice Ajax 4 (Affiche la météo d’une ville )----------------------

function voirMeteo() {
    let ville = document.getElementById('ville').value; 
    if (!ville) {
        alert("Veuillez saisir une ville.");
        return; // Si la ville est vide, on arrête l'exécution de la fonction
    }
    fetch(`https://wttr.in/${ville}?format=3`)
    .then(response => response.text()) // Transforme la réponse en text
    .then(data => {
        let meteo = document.getElementById('meteo'); // Sélectionne l'élément <div> où afficher la météo
        meteo.textContent = data;
    })
    .catch(error => {
        console.error('Erreur lors de la récupération des données météo :', error);
         meteo = document.getElementById('meteo');
        meteo.innerHTML = `<p>Erreur lors de la récupération des données météo.</p>`;
    }
    );
}

// Exercice Ajax 5 (Afficher le titre de tous les posts)
function chargertoutTitres() {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {
        let ul = document.getElementById('titrePosts'); // Sélectionne l'élément <ul> où afficher les titres
        ul.innerHTML = ''; // Vide le contenu de la <ul>
        data.forEach(post => {
            let li = document.createElement('li'); // Crée un élément <li> pour chaque titre de post
            li.textContent = post.title; // Met le titre du post dans le <li>
            ul.appendChild(li); // Ajoute le <li> à la <ul>
        });
    }).catch(error => {
        console.error('Erreur lors de la récupération des titres des posts :', error);
    });
}
