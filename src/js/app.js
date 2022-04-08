import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
import dataQuotes from '../files/quotes.js';
const startTime = new Date() 
export let quotes = [];
  
document.addEventListener('DOMContentLoaded', function() {
  flsFunctions.clock(startTime);
  flsFunctions.setDataDayTime(startTime);
  flsFunctions.initTimeAndDateInfo(startTime);
  flsFunctions.setGreetings(startTime);
  flsFunctions.setupQuotes();
  flsFunctions.letsMusic();
  
})

//SETUP QUOTES
const updatePhrase = document.querySelector('.phrase-block__update')

for (let i = 0 ; i < dataQuotes.quotes.length ; i++ ) {
  quotes.push(dataQuotes.quotes[i]);
}

updatePhrase.addEventListener('click',  function() {
  flsFunctions.setupQuotes(),
  flsFunctions.rotateButton()
})

//init click for showing more information about time
const buttonExpandDetails = document.querySelector('.more-button' )
buttonExpandDetails.addEventListener('click', flsFunctions.moreLessClick)

//MAIN CLOCK FUNCTION
setInterval ( function() {
  let now = new Date();
  flsFunctions.clock(now)
  flsFunctions.setGreetings(now)

  //flsFunctions.setDataDayTime(now)
  },
  1000);