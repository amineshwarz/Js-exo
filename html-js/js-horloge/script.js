// horloge numérique
let alarmTime = null;
// let alarmTriggered = false;

function showDate() {
    var date = new Date()
    var heures = date.getHours();
    var minutes = date.getMinutes();
    var secondes = date.getSeconds();
    if( heures < 10 ){ heures = '0' + heures; }
    if( minutes < 10 ){ minutes = '0' + minutes; }
    if( secondes < 10 ){ secondes = '0' + secondes; }
    
    var time = heures + ':' + minutes + ':' + secondes;
    document.getElementById('horloge').innerHTML =time;

    // Vérifie si l'heure actuelle correspond à l'alarme
    if (alarmTime === heures + ':' + minutes && !alarmTriggered) {
        alarmTriggered = true; 
        document.getElementById('alarm-message').innerHTML = 'Alarme ! Il est ' + time;
        // Optionnel : lire un son
        // new Audio('alarm.mp3').play(); // Ajoute un son si tu veux
        alert('⏰ Alarme !');
    }
    refresh();  
}


function refresh(){
    var t = 1000; // rafraîchissement en millisecondes
    setTimeout('showDate()',t)
}

function setAlarm() {
    let input = document.getElementById('alarmTime').value;
    if (input) {
        alarmTime = input;
        alarmTriggered = false;
        document.getElementById('alarm-message').innerHTML = 'Alarme réglée pour : ' + alarmTime;
    }
}
showDate();



//Horloge analogique



function analogiqueClock(){
    const mtn = new Date();

    const seconds = mtn.getSeconds();
    const minutes = mtn.getMinutes();
    const hours = mtn.getHours();

    const secondRotat = seconds * 6 ;   //chaque second l'eguille tourne de 6 degrés
    const minuteRotat = minutes * 6 + seconds * 0.1; // O.1 degré par seconde (60 / 6° = 0.1)
    const hourRotat = hours  * 30 + minutes * 0.5;

    document.getElementById('second-barre').style.transform = `rotate(${secondRotat}deg)`;
    document.getElementById('minute-barre').style.transform = `rotate(${minuteRotat}deg)`;
    document.getElementById('hour-barre').style.transform= `rotate(${hourRotat}deg)`;                                 
}
// Met à jour chaque seconde
setInterval(analogiqueClock,1000)
analogiqueClock();




















// horloge analogique

// function updateClock() {
//     const now = new Date();
  
//     const seconds = now.getSeconds();
//     const minutes = now.getMinutes();
//     const hours = now.getHours();
  
//     const secondDeg = seconds * 6;         // 360° / 60s
//     const minuteDeg = minutes * 6 + seconds * 0.1; // 360° / 60m + progression
//     const hourDeg = ((hours % 12) * 30) + (minutes * 0.5); // 360° / 12h + progression
  
//     document.getElementById('second-hand').style.transform = `rotate(${secondDeg}deg)`;
//     document.getElementById('minute-hand').style.transform = `rotate(${minuteDeg}deg)`;
//     document.getElementById('hour-hand').style.transform = `rotate(${hourDeg}deg)`;
//   }
  
//   // Met à jour chaque seconde
//   setInterval(updateClock, 1000);
//   updateClock(); // pour initialiser à l'ouverture