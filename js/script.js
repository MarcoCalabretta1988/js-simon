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
 
let daysToChristmas = 24 - day;
let hoursToChristmas = 23 - hours;
let minutesToChristmas = 59 - minutes;
let secondsToChristmas = 59 - seconds;



 //Inizializzo I valori del count down
 daysElement.innerText = daysToChristmas;
 hoursElement.innerText = hoursToChristmas;
 minutesElement.innerText = minutesToChristmas;
 secondsElement.innerText = secondsToChristmas;
console.log(hours,minutes,seconds,day);

//avvio funzione a tempo
const actualSecond = setInterval( () => {

//controlli dei secondi---------------------------------------
if (!secondsToChristmas){

  secondsToChristmas = 59;
  secondsElement.innerText = secondsToChristmas;

 
  //?controlli sui minuti-----------------------------------
  if (!minutesToChristmas){

    minutesToChristmas = 59;
    minutesElement.innerText = minutesToChristmas;

    // TODO controlli ore ---------------------------------
    if (!hoursToChristmas){

        hoursToChristmas = 23;
        minutesElement.innerText = hoursToChristmas;
        //! day controllers---------------------------------
        if (daysToChristmas){
            daysElement.innerText = --hoursToChristmas;
          }
        //!-------------------------------------------------
      }
      else if( hoursToChristmas <= 10){
        hoursElement.innerText = '0' + --hoursToChristmas;
      }
      else{
         
        hoursElement.innerText = --hoursToChristmas;
      }
     //TODO ------------------------------------------------
  }
  else if( minutesToChristmas <= 10){
    minutesElement.innerText = '0' + --minutesToChristmas;
  }
  else{
     
    minutesElement.innerText = --minutesToChristmas;
  }
  //?---------------------------------------------------------
}
else if( secondsToChristmas <= 10){
    secondsElement.innerText = '0' + --secondsToChristmas;
}
else{
   
    secondsElement.innerText = --secondsToChristmas;
}
//-------------------------------------------------------------


//COntrollo finale

if (daysToChristmas === 0 && hoursToChristmas === 0 && minutesToChristmas === 0 && secondsToChristmas === 0 ){
    clearInterval(actualSecond);
}
}, 1000);



