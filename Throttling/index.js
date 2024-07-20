const container = document.querySelector(".container");

const throttle = (callback, delay) => {
  let isWaiting = false;
  return (...args) => {
    if (isWaiting) return;
    callback(...args);
    isWaiting = true;
    setTimeout(() => {
      isWaiting = false;
    }, delay);
  };
};

const handleScroll = () => {
  console.log("scrolled");
};

container.addEventListener("scroll", throttle(handleScroll, 1000));
