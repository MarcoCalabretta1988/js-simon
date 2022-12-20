//JS LINK CONTROL
console.log('JS OK');

//Recupero elementi dal DOM

const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

//Estrapolo data odierna ene estraggo valori
 const now = new Date();
 const day = now.getDate();
 const hours = now.getHours();
 const minutes = now.getMinutes();
 const seconds = now.getSeconds();
 
const daysToChristmas = 24 - day;
const hoursToChristmas = 23 - hours;
const minutesToChristmas = 59 - minutes;
const secondsToChristmas = 59 - seconds;

 //Inizializzo I valori del count down
 daysElement.innerText = daysToChristmas;
 hoursElement.innerText = hoursToChristmas;
 minutesElement.innerText = minutesToChristmas;
 secondsElement.innerText = secondsToChristmas;
console.log(hours,minutes,seconds,day);





