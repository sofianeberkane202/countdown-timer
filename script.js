const monthesEle = document.querySelector("[months]");
const daysEle = document.querySelector("[days]");
const hoursEle = document.querySelector("[hours]");
const minutsEle = document.querySelector("[minuts]");
const secondsEle = document.querySelector("[seconds]");

/*
  month = Math.trunc(maxTime / (30 * 24 * 60 * 60))
  days = maxTime % (24 * 60 * 60) % DAYS
  hours = maxTime % (60 * 60) % 24
  minuts = maxTime % 60
  seconds = maxTime % 60 % 60 
*/

const YEAR = new Date().getFullYear();
let month = +monthesEle.textContent;
let days = +daysEle.textContent;
let hours = +hoursEle.textContent;
let minuts = +minutsEle.textContent;
let seconds = +secondsEle.textContent;

const getMonthsInSeconds = function () {
  return month * 30 * 24 * 60 * 60;
};

const getdaysInSeconds = function () {
  return days * 24 * 60 * 60;
};

const getHoursInSeconds = function () {
  return hours * 60 * 60;
};

const getMinutsInSeconds = function () {
  return minuts * 60;
};

const convertTimeToSeconds = function () {
  return (
    getMonthsInSeconds() +
    getdaysInSeconds() +
    getHoursInSeconds() +
    getMinutsInSeconds() +
    seconds
  );
};

let maxTime = convertTimeToSeconds();

console.log(maxTime);

// ---------------------------------------

const updateTimeUI = function () {
  monthesEle.textContent = `${month}`.padStart(2, 0);
  daysEle.textContent = `${days}`.padStart(2, 0);
  hoursEle.textContent = `${hours}`.padStart(2, 0);
  minutsEle.textContent = `${minuts}`.padStart(2, 0);
  secondsEle.textContent = `${seconds}`.padStart(2, 0);
};

function convertSeconds(seconds) {
  const SECONDS_IN_A_MINUTE = 60;
  const SECONDS_IN_AN_HOUR = 60 * SECONDS_IN_A_MINUTE;
  const SECONDS_IN_A_DAY = 24 * SECONDS_IN_AN_HOUR;
  const SECONDS_IN_A_MONTH = 30 * SECONDS_IN_A_DAY; // Assuming 30 days in a month

  const months = Math.floor(seconds / SECONDS_IN_A_MONTH);
  seconds %= SECONDS_IN_A_MONTH;

  const days = Math.floor(seconds / SECONDS_IN_A_DAY);
  seconds %= SECONDS_IN_A_DAY;

  const hours = Math.floor(seconds / SECONDS_IN_AN_HOUR);
  seconds %= SECONDS_IN_AN_HOUR;

  const minutes = Math.floor(seconds / SECONDS_IN_A_MINUTE);
  seconds %= SECONDS_IN_A_MINUTE;

  return { months, days, hours, minutes, seconds };
}

const countdownTimer = function () {
  const timer = setInterval(function () {
    maxTime--;
    const newTime = convertSeconds(maxTime);
    month = newTime.months;
    days = newTime.days;
    hours = newTime.hours;
    minuts = newTime.minutes;
    seconds = newTime.seconds;
    updateTimeUI();
  }, 1000);
};

countdownTimer();

// 2:32:00 :
