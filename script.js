const monthsEle = document.getElementById("months");
const daysEle = document.getElementById("days");
const hoursEle = document.getElementById("hours");
const minutesEle = document.getElementById("minutes");
const secondsEle = document.getElementById("seconds");

const newYears = "01-01-2025"; // select the last date (target date)

const remaindTime = {
  months,
  days,
  hours,
  minutes,
  seconds,
};

const conversionSecondsToDate = function (seconds) {
  const SECONDS_IN_A_MINUTE = 60;
  const SECONDS_IN_AN_HOUR = 60 * SECONDS_IN_A_MINUTE;
  const SECONDS_IN_A_DAY = 24 * SECONDS_IN_AN_HOUR;
  const SECONDS_IN_A_MONTH = 30 * SECONDS_IN_A_DAY;

  remaindTime.months = Math.floor(seconds / SECONDS_IN_A_MONTH);
  seconds %= SECONDS_IN_A_MONTH;

  remaindTime.days = Math.floor(seconds / SECONDS_IN_A_DAY);
  seconds %= SECONDS_IN_A_DAY;

  remaindTime.hours = Math.floor(seconds / SECONDS_IN_AN_HOUR);
  seconds %= SECONDS_IN_AN_HOUR;

  remaindTime.minutes = Math.floor(seconds / SECONDS_IN_A_MINUTE);
  seconds %= SECONDS_IN_A_MINUTE;

  remaindTime.seconds = seconds;
};

const updateUI = function () {
  monthsEle.textContent = `${remaindTime.months}`.padStart(2, 0);
  daysEle.textContent = `${remaindTime.days}`.padStart(2, 0);
  hoursEle.textContent = `${remaindTime.hours}`.padStart(2, 0);
  minutesEle.textContent = `${remaindTime.minutes}`.padStart(2, 0);
  secondsEle.textContent = `${remaindTime.seconds}`.padStart(2, 0);
};

const countDown = function () {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();
  const remainingTime = Math.floor((newYearsDate - currentDate) / 1000);

  conversionSecondsToDate(remainingTime);
  updateUI();
};

const timer = setInterval(countDown, 1000);
