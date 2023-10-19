// const hoursBox = document.querySelector('#hours');
const minutesBox = document.querySelector('#minuts');
const secondsBox = document.querySelector('#second');
const milliSecBox = document.querySelector('#milisecond');

const play = document.querySelector('.start');
const pause = document.querySelector('.stop');
const reset = document.querySelector('.reset');
const split = document.querySelector('.split');

const splitRecord = document.querySelector('.split');


let minutes = 0;
let seconds = 0;
let milliSec = 0;

// let hoursInterval;
let minutesInterval;
let secondsInterval;
let milliSecInterval;

// split.disabled = true;
// split.style.backgroundColor = '#979797'

pause.disabled = true;
// pause.style.backgroundColor = '#979797'

reset.disabled = true;
// reset.style.backgroundColor = '#979797'



// ===>> PLAY BUTTON

play.addEventListener('click', () => {

    play.disabled = true;
    // play.style.backgroundColor = '#979797'

    // split.disabled = false;
    // split.style.backgroundColor = '#0061e0'

    pause.disabled = false;
    // pause.style.backgroundColor = '#0061e0'

    reset.disabled = false;
    // reset.style.backgroundColor = '#0061e0'


    milliSecInterval = setInterval(() => {

        if (milliSec === 100) {
            milliSec = 1;
        }
        else {
            milliSec += 1;
        }

        if (milliSec < 10) {
            milliSecBox.innerHTML = `0${milliSec}`;
        }
        else {
            milliSecBox.innerHTML = milliSec;
        }

    }, 1);


    secondsInterval = setInterval(() => {

        if (seconds === 60) {
            seconds = 1;
        }
        else {
            seconds += 1;
        }

        if (seconds < 10) {
            secondsBox.innerHTML = `0${seconds}`;
        }
        else {
            secondsBox.innerHTML = seconds;
        }

    }, 1000);


    minutesInterval = setInterval(() => {

        if (minutes === 60) {
            minutes = 1;
        }
        else {
            minutes += 1;
        }

        if (minutes < 10) {
            minutesBox.innerHTML = `0${minutes}`;
        }
        else {
            minutesBox.innerHTML = minutes;
        }

    }, 60000);


    hoursInterval = setInterval(() => {

        if (hours === 60) {
            hours = 1;
        }
        else {
            hours += 1;
        }

        if (hours < 10) {
            hoursBox.innerHTML = `0${hours}`;
        }
        else {
            hoursBox.innerHTML = hours;
        }

    }, 3600000);

});

pause.addEventListener('click', () => {
    clearInterval(milliSecInterval);
    clearInterval(secondsInterval);
    clearInterval(minutesInterval);
    clearInterval(hoursInterval);

    pause.disabled = true;
   

    play.disabled = false;
    
    

});



// ===>> RESET BUTTON

reset.addEventListener('click', () => {

    clearInterval(milliSecInterval);
    clearInterval(secondsInterval);
    clearInterval(minutesInterval);
    clearInterval(hoursInterval);

    hours = 0;
    minutes = 0;
    seconds = 0;
    milliSec = 0;

    milliSecBox.innerHTML = `0${milliSec}`;
    secondsBox.innerHTML = `0${seconds}`;
    minutesBox.innerHTML = `0${minutes}`;
   
    splitRecord.innerHTML = " ";


    // play.disabled = false;
   

    // pause.disabled = true;

    // split.disabled = true;
   split.disabled = false;
    // split.style.backgroundColor = '#0061e0'
    splitRecord.innerHTML =`<button class="p-3 bg-red-600"><i class="fa-solid fa-scissors fa-beat-fade"></i> Split</button>`
    reset.disabled = true;
    
})



// ===>> SPLIT BUTTON

let count = 0;
split.addEventListener('click', () => {
    count += 1
    splitRecord.innerHTML += `<span id="count"> </br> #${count} </span> &nbsp; &nbsp; &nbsp; &nbsp; ${minutes}:${seconds}:${milliSec} </br>`
})