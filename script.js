const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countDown = document.getElementById('countdown');
const newYear = document.getElementById('newyear');
const endSchool = document.getElementById('endschool');
const startSchool = document.getElementById('startschool');
const justin = document.getElementById('justin');
const title = document.getElementById('title');
let type = 0;

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);
let endSchoolTime = new Date(`June 20 ${currentYear} 00:00:00`);
if (endSchoolTime > 0) {
  endSchoolTime = new Date(`June 20 ${currentYear + 1} 00:00:00`);
}
let startSchoolTime = new Date(`September 11 ${currentYear} 00:00:00`);
if (startSchoolTime < 0) {
  startSchoolTime = new Date(`September 11 ${currentYear + 1} 00:00:00`);
}
let justinBirthday = new Date(`November 12 ${currentYear} 00:00:00`);
if (justinBirthday < 0) {
  justinBirthday = new Date(`November 12 ${currentYear + 1} 00:00:00`);
}

const times = [newYearTime, endSchoolTime, startSchoolTime, justinBirthday]
const titles = ['New Year', 'Summer Break', 'Start Of School', `Justin's Bithday`]

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
justin.addEventListener('click', () => type = 3);