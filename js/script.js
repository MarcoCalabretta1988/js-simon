//JS LINK CONTROL
console.log('JS OK');

//Recupero elementi dal DOM

const daysElement = document.getElementById('days');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');

//Recupero data odierna
 const now = new Date();

//Recupero millisecondi al natale
 const christmas = new Date (2022 , 11,25,0,0,0);
 const christmasMillisecond = christmas.getTime();
 console.log(christmasMillisecond);


 // definisco parametri secondo i millisecondi
  const second= 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24; 



  
  //avvio funzione a tempo
  const countDown = setInterval( () => {
  
    const nowMillisecond = now.getTime();
    console.log(nowMillisecond);

    const delta = christmasMillisecond - nowMillisecond;

    const daysToChristmas = Math.floor(delta / day);
    const hoursToChristmas = Math.floor((delta % day) / hour );
    const minutesToChristmas = Math.floor((delta % hour) / minute );
    const secondsToChristmas =Math.floor((delta % minute) / second );


    
    //Stampo i valori calcolati
    daysElement.innerText = daysToChristmas;
    hoursElement.innerText = hoursToChristmas;
    minutesElement.innerText = minutesToChristmas;
    secondsElement.innerText = secondsToChristmas;
    

if (delta < 0 ){
    clearInterval(countDown);
}
}, 1000);



