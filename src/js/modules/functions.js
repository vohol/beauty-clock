import * as app from "../app.js";

/* Проверка поддержки webp, добавление класса webp или no-webp для HTML */
export function isWebp() {
	// Проверка поддержки webp
	function testWebP(callback) {
		let webP = new Image();
		webP.onload = webP.onerror = function () {
			callback(webP.height == 2);
		};
		webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}
	// Добавление класса _webp или _no-webp для HTML
	testWebP(function (support) {
		let className = support === true ? 'webp' : 'no-webp';
		document.documentElement.classList.add(className);
	});
}

import { getSunrise, getSunset } from 'sunrise-sunset-js';
import { DateTime } from "luxon";


//variables for clock funtion
const hoursBlock = document.querySelector('.clock__hours')
const minsBlock = document.querySelector('.clock__mins')

//clock funtion
export function clock(now) {
	let hours =  now.getHours() < 10 ? '0' + now.getHours() : now.getHours();
	let minutes =  now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes();
	hoursBlock.textContent = hours;
	minsBlock.textContent = minutes;
}

//variables for click function to show details about time
const buttonExpandDetails = document.querySelector('.more-button' )
const buttonExpandDetailsText = document.querySelector('.more-button__text' )
const phraseBlock = document.querySelector('.phrase-block' )
const detailsBlock = document.querySelector('.clock__details' )
const clockBlock = document.querySelector('.clock__time-block' )

//click function to show details about time
export function moreLessClick() {
  buttonExpandDetailsText.textContent == 'MORE' ?
  buttonExpandDetailsText.textContent = 'LESS' :
  buttonExpandDetailsText.textContent = 'MORE' ;
  buttonExpandDetails.classList.toggle('more-button--expanded')
  phraseBlock.classList.toggle('hiden')
  detailsBlock.classList.toggle('clock__details--expanded')
  clockBlock.classList.toggle('clock__time-block--shifted')
}

const mainSection = document.querySelector('.clock')

export function setDataDayTime(now) {
navigator.geolocation.getCurrentPosition(function(position) {
  if (getSunset(position.coords.latitude, position.coords.longitude) >= now ) {
    mainSection.dataset.dayTime = 'day';
  } else {
    mainSection.dataset.dayTime = 'night';
  }
});
}

//init main time and date information
export function initTimeAndDateInfo(date) {
  
  const dt = DateTime.now();
  const timezoneShortBlock = document.querySelector('.clock__timezone')
  const timezoneBlock = document.querySelector('#timezone')
  const dayOfTheYearBlock = document.querySelector('#day-of-the-year')
  const dayOfTheWeekBlock = document.querySelector('#day-of-the-week')
  const weekBlock = document.querySelector('#week-number')
  let split = date.toString().split(" ");
  
  timezoneShortBlock.textContent = split[5].slice(0,3);
  timezoneBlock.textContent = Intl.DateTimeFormat().resolvedOptions().timeZone;
  dayOfTheYearBlock.textContent = dt.ordinal;
  dayOfTheWeekBlock.textContent = dt.weekday;
  weekBlock.textContent = dt.weekNumber;
  
  const requestLocation = 'https://geolocation-db.com/json/d802faa0-10bd-11ec-b2fe-47a0872c6708'
  
  fetch(requestLocation)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
      document.querySelector('.clock__town').textContent = data.city
      document.querySelector('.clock__country').textContent = data.country_code
    })
    .catch(function (err) {
      console.log('error: ' + err);
    });
}


//init greetings
const greetingsBlock = document.querySelector('.clock__greetings')

export function setGreetings(time) {
  let tempVariable = time.getHours()
  
  let greetingsMessage;
  switch (tempVariable) {
    case (tempVariable >= 6 && tempVariable < 10 && tempVariable):
      default:
      greetingsMessage = "good morning";
      break;
    case (tempVariable >= 10 && tempVariable <= 16 && tempVariable):
      greetingsMessage = "good day";
      break;
    case (tempVariable > 16 && tempVariable < 22 && tempVariable):
      greetingsMessage = "good evening";
      break;
    case (tempVariable >= 22  && tempVariable):
    case (tempVariable < 6 && tempVariable):
      greetingsMessage = "good night";
      break;
  }
  greetingsBlock.textContent = greetingsMessage;
}


//SETUP QUOTES
const updatePhrase = document.querySelector('.phrase-block__update')
const phrase = document.querySelector('.phrase-block__phrase')
const phraseAthor = document.querySelector('.phrase-block__athor')

export function setupQuotes() {
  let randomValue = Math.floor(Math.random() * (app.quotes.length-1));
  phrase.textContent = app.quotes[randomValue].quote
  phraseAthor.textContent = app.quotes[randomValue].author
}

let deg = 0;

export function rotateButton() {
  const turn = 360;
  updatePhrase.style.transform = `rotate(${deg+turn}deg)`
  updatePhrase.style.MozTransform = `rotate(${deg+turn}deg)`
  updatePhrase.style.webkitTransform = `rotate(${deg+turn}deg)`
  updatePhrase.style.msTransform = `rotate(${deg+turn}deg)`
  updatePhrase.style.OTransform = `rotate(${deg+turn}deg)`
  deg += turn;
}

const audio = new Audio('files/music.mp3');

export function letsMusic() {
  audio.play()
  audio.volume = 0.3;
}