const currentTime = document.querySelector(".para");
const buttonParent = document.querySelector(".btn-container");

let seconds = 0;
let minutes = 0;
let hours = 0;
let timerID;

const displayTime = (hours, minutes, seconds) => {
  currentTime.innerText = `${hours < 10 ? `0${hours}` : hours} : ${
    minutes < 10 ? `0${minutes}` : minutes
  } : ${seconds < 10 ? `0${seconds}` : seconds}`;
};

const handleClick = (e) => {
  const button = e.target.name;
  if (button == "start") {
    timerID = setInterval(() => {
      seconds++;
      if (seconds > 59) {
        seconds = 0;
        minutes++;
      }
      if (minutes > 59) {
        minutes = 0;
        hours++;
      }
      displayTime(hours, minutes, seconds);
    }, 1000);
  } else if (button == "stop") {
    clearInterval(timerID);
  } else if (button == "reset") {
    clearInterval(timerID);
    seconds = minutes = hours = 0;
    displayTime(hours, minutes, seconds);
  }
};

buttonParent.addEventListener("click", handleClick);
