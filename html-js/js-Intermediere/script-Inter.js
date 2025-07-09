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

