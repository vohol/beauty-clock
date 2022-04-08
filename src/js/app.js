import * as flsFunctions from "./modules/functions.js";
flsFunctions.isWebp();
import moment from 'moment';
import dataQuotes from '../files/quotes.js';
const startTime = new Date() 



  
document.addEventListener('DOMContentLoaded', function() {
  flsFunctions.clock(startTime);
  flsFunctions.setDataDayTime(startTime);
  flsFunctions.initTimeAndDateInfo(startTime);
  setupQuotes();
})

//SETUP QUOTES
const updatePhrase = document.querySelector('.phrase-block__update')
const phrase = document.querySelector('.phrase-block__phrase')
const phraseAthor = document.querySelector('.phrase-block__athor')
let quotes = [];

for (let i = 0 ; i < dataQuotes.quotes.length ; i++ ) {
  quotes.push(dataQuotes.quotes[i]);
}

function setupQuotes() {
  let randomValue = Math.floor(Math.random() * (quotes.length-1));
  phrase.textContent = quotes[randomValue].quote
  phraseAthor.textContent = quotes[randomValue].author
}

updatePhrase.addEventListener('click', setupQuotes)
document.addEventListener('DOMContentLoaded', setupQuotes)

//init click for showing more information about time
const buttonExpandDetails = document.querySelector('.more-button' )
buttonExpandDetails.addEventListener('click', flsFunctions.moreLessClick)



//MAIN CLOCK FUNCTION
setInterval ( function() {
  let now = new Date();
  flsFunctions.clock(now)
  //flsFunctions.setDataDayTime(now)
  },
  1000);