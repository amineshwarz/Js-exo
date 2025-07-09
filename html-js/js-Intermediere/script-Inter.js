//----------- JS Exercice 2 palindrome------
function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}
let mot = 'kayak';
let motpalindrome = isPalindrome(mot);
console.log(motpalindrome ? `${mot} est un palindrome` : `${mot} n'est pas un palindrome`);


//----------- JS Exercice II Intermediere un feu tricolors qui change toute les x seconde

let lights =document.querySelectorAll('.light');
let currentIndex= 0;

function randomLight(){
    for(let i = 0; i < lights.length; i++) {
        lights[i].classList.remove('active');
    }
    lights[currentIndex].classList.add('active');
    currentIndex++;
    if(currentIndex >= lights.length) {
        currentIndex = 0;
    }
}
setInterval(randomLight, 1000);


//-------------- JS Exercice 3 modal avec un bouton------------

 const modalBtn = document.querySelector('.modal-btn');
 const modalOverlay = document.querySelector('.modal-overlay');
 const closeBtn = document.querySelector('.close');

 modalBtn.addEventListener('click', () => {
     modalOverlay.style.display = 'flex';
 });

 closeBtn.addEventListener('click', () => {
     modalOverlay.style.display = 'none';
 });
 window.addEventListener('click', (e) => {
     if (e.target === modalOverlay) {
         modalOverlay.style.display = 'none';
     }
 }
 );

 //-------------- JS Exercice 4  classe qui calcule la somme des nombres d'une liste ------------
//  class SommeNombres {
//     constructor(listeNombres) {
//         this.listeNombres = listeNombres;
//     }
//     calculeSomme(){
//         let somme=0;
//         for (let nombre of this.listeNombres){
//             somme += nombre;
//         }
//         return somme;
//     }
//     showResult () {
//         const somme = this.calculeSomme();
//         console.log( `la somme de liste est : ${somme} `);
//     }
//  }
//  const listeNombres = [1, 2, 3, 4, 5]; // bonnus faire en input et button 
//  const sommeNombres = new SommeNombres(listeNombres);
//  sommeNombres.showResult(); 

class SommeNombres {
    constructor(inputId, resultId) {
        this.inputN = document.getElementById(inputId);
        this.divResult = document.getElementById(resultId)
    }
    calculeSomme(){
        const valeurs = this.inputN.value.split(',')
        .map(val => parseFloat(val.trim()))
        .filter(val => !isNaN(val));

        const somme = valeurs.reduce((acc, curr) => acc + curr, 0);
        this.divResult.innerHTML=`la somme de la liste est : <strong> ${somme} </strong>`;
    }
}
const calcul = new SommeNombres('inputNumbers','resultSomme');
document.getElementById('calculBtn').addEventListener('click', () => {
    calcul.calculeSomme();
});







 
 //-------------- JS Exercice 5  module de combat ------------
 class Arme {
    constructor(nom, poids, degats){
        this.nom = nom;
        this.poids = poids;
        this.degats = degats;
    }
    showArme () {
        return `Arme : ${this.nom}, son poids : ${this.poids}Kg, et elle fait : ${this.degats} de degats`;
    }
 }
 class Sort {
    constructor(type, puissance){
        this.type = type;
        this.puissance = puissance;
    }
    showSort () {
        return `Type : ${this.type} et sa puissance : ${this.puissance}`;
    }   
 }
 const epee = new Arme('grand Épee', 15, 50);
 const arc = new Arme('petit Arc', 5, 40);

 const glace = new Sort('pluis de glace', 70);
 const shurigan = new Sort('multiple churigan', 60);

//  console.log (epee.showArme());
//  console.log (arc.showArme());
//  console.log (glace.showSort());
//  console.log (shurigan.showSort());
const contenu = `
      <div class="item">${epee.showArme()}</div>
      <div class="item">${arc.showArme()}</div>
      <div class="item">${glace.showSort()}</div>
      <div class="item">${shurigan.showSort()}</div>
    `;
const result = document.getElementById('resultDiv');
result.innerHTML = contenu;




//-------------- JS Exercice 6  module de Personnage ------------
class Personnage {
    constructor(nom, sante, force, titre){
        this.nom = nom;
        this.sante = sante;
        this.force = force;
        this.titre = titre;
    }
    showPersonnage(){
        return `Nom : ${this.nom}, Santé : ${this.sante}, Force : ${this.force}, Titre : ${this.titre}`;
    }
}
class Guerrier extends Personnage {
    constructor(nom, sante, force, arme, armure){
        super(nom, sante, force, "Guerrier");
        this.arme = arme;
        this.armure=armure;
    }
    showGurrier(){
        return `${super.showPersonnage()}, Arme : ${this.arme}, Armure : ${this.sante}`;
    }
}
class Mage extends Personnage {
    constructor(nom, sante, force, mana, element){
        super(nom, sante, force, "Mage");
        this.mana = mana;
        this.element=element;
    }
    showMage(){
        return `${super.showPersonnage()},Mana : ${this.mana}, element: ${this.element}`;
    }
}
class Archer extends Personnage {
    constructor(nom, sante, force, precision, fleche){
        super(nom, sante, force, "Archer");
        this.precision = precision;
        this.fleche=fleche;
    }
    showArcher(){
        return `${super.showPersonnage()}, Precision : ${this.precision}, Fléches : ${this.fleche}`;
    }
}
class Epeiste extends Personnage {
    constructor(nom, sante, force, degats, epee){
        super(nom, sante, force, "Epeiste");
        this.degats = degats;
        this.epee = epee;
    }
    showEpeiste(){
        return `${super.showPersonnage()}, Dégats : ${this.degats}, Épee : ${this.epee}`;
    }
}

const guerrier = new Guerrier('Zlatan', 195, 100, 'Gun','cowboy');
const mage = new Mage('Strange', 150, 90, 200,'Temps');
const archer = new Archer('Arrow', 95, 90, 100, 80);
const epeiste = new Epeiste('zorro', 200, 160, 80, 3); 

// console.log(guerrier.showGurrier());
// console.log(mage.showMage());
// console.log(archer.showArcher());
// console.log(epeiste.showEpeiste());

const content = `
      <div class="item">${guerrier.showGurrier()}</div>
      <div class="item">${mage.showMage()}</div>
      <div class="item">${archer.showArcher()}</div>
      <div class="item">${epeiste.showEpeiste()}</div>
    `;
const show = document.getElementById('showDiv');
show.innerHTML = content;