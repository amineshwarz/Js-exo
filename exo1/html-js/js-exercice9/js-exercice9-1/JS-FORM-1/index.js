// Exercice 9-1  (JS - Formulaire)

// let affichage = document.getElementById("nom").value;
// let affichage2 = document.getElementById("prenom").value;
// alert(affichage + " " + affichage2);


// Exercice 9-2 (JS - Formulaire - Calculatrice)
document.getElementById('btn').onclick = function direBonjour() {
    alert('OH OUIII ENCORE TOUCHE MOI !');
  };



  // Exercice 9-2 (JS - Formulaire - Calculatrice):
  

  document.getElementById('mnBtn').onclick = function calcul() {
    var a = parseFloat(document.getElementById('nb1').value);
    var b = parseFloat(document.getElementById('nb2').value);
    document.getElementById('resultat').value= a + b;
  }
  
  
  

  



  
  
