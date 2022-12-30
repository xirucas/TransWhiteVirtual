const myPreloader = document.querySelector('.preloader');
const fadeOutEffect = setInterval(() => {
  if (!myPreloader.style.opacity) {
    myPreloader.style.opacity = 1;
  }
  if (myPreloader.style.opacity > 0) {
    myPreloader.style.opacity -= 0.4;
  } else {
    clearInterval(0);
  }
}, 300);