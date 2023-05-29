const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countDown = document.getElementById('countdown');
const newYear = document.getElementById('newyear');
const endSchool = document.getElementById('endschool');
const startSchool = document.getElementById('startschool');
const title = document.getElementById('title');
let type = 0;

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
const endSchoolTime = new Date(`June 20 ${currentYear} 00:00:00`);
const startSchoolTime = new Date(`September 14 ${currentYear} 00:00:00`);
const times = [newYearTime, endSchoolTime, startSchoolTime]
const titles = ['New Year', 'Summer Break', 'Start Of School']

updateCountdown()

function updateCountdown() {
  const currentTime = new Date();
  const diff = times[type] - currentTime;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? '0' + h : h;
  minutes.innerHTML = m < 10 ? '0' + m : m;
  seconds.innerHTML = s < 10 ? '0' + s : s;

  title.innerHTML = `${titles[type]} Countdown`
}

// function

setInterval(updateCountdown, 1000);

newYear.addEventListener('click', () => type = 0);
endSchool.addEventListener('click', () => type = 1);
startSchool.addEventListener('click', () => type = 2);