const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const countDownEl = document.querySelector(".countdown");
const loader = document.querySelector(".loader");

const getCurrentYear = new Date().getFullYear();
const myBirthdayTime = new Date(`May 9 ${getCurrentYear} 00:00:00`);

function loading() {
  loader.hidden = false;
  countDownEl.style.display = "none";
}

// Remove Loaing Spinner
function complete() {
  loader.hidden = true;

  countDownEl.style.display = "flex";
}

function countDown() {
  loading();

  const currentYear = new Date();
  const diff = myBirthdayTime - currentYear;

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  const m = Math.floor(diff / 1000 / 60) % 60;
  const s = Math.floor(diff / 1000) % 60;

  days.innerHTML = d;
  hours.innerHTML = h < 10 ? "0" + h : h;
  minutes.innerHTML = m < 10 ? "0" + m : m;
  seconds.innerHTML = s < 10 ? "0" + s : s;
  complete();
}

loading();
setInterval(countDown, 1000);
