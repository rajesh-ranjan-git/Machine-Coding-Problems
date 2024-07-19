const input = document.querySelector(".input");

const inputHandler = (event) => {
  console.log(event.target.value);
};

const debounce = (callback, delay) => {
  let timerID;
  return (...args) => {
    clearTimeout(timerID);
    timerID = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};
input.addEventListener("keyup", debounce(inputHandler, 1000));
