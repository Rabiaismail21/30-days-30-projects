let [millisec, seconds, minutes, hours] = [0, 0, 0, 0];

let isRunning = false;
let interval;

function updateDisplay() {
  let displayHours = hours < 10 ? `0${hours}` : hours;
  let displayMin = minutes < 10 ? `0${minutes}` : minutes;
  let displaySec = seconds < 10 ? `0${seconds}` : seconds;
  let displayMillisec = millisec < 10 ? `0${millisec}` : millisec;

  document.getElementById(
    "watch"
  ).innerText = `${displayHours} : ${displayMin} : ${displaySec} : ${displayMillisec}`;
}


let startStopWatch = () => {
  if (!isRunning) {
    isRunning = true;
    interval = setInterval(() => {
      millisec++;

      if (millisec === 100) {
        millisec = 0;
        seconds++;
      }

      if (seconds === 60) {
        seconds = 0;
        minutes++;
      }

      if (minutes === 60) {
        minutes = 0;
        hours++;
      }

      updateDisplay();
    }, 10); // update every 10 milliseconds
  }
};

let stopStopWatch = () => {
  isRunning = false;
  clearInterval(interval);
};

let resetStopWatch = () => {
  isRunning = false;
  clearInterval(interval);
  [hours, minutes, seconds, millisec] = [0, 0, 0, 0];
  updateDisplay();
};

let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
let allBtns = document.querySelectorAll(".btn");

startBtn.addEventListener("click", startStopWatch);
stopBtn.addEventListener("click", stopStopWatch);
resetBtn.addEventListener("click", resetStopWatch);

updateDisplay();

allBtns.forEach((item) => {
  item.addEventListener("click", (e) => {
    // reset to default styling
    allBtns.forEach((btn) => {
      btn.style.backgroundColor = "";
    });
    // changed the background color of clicked button
    e.target.style.backgroundColor = "lightseagreen";
  });
});
