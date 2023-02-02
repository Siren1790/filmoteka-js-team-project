
import { refs } from "./refs";
// const refs.scrollToTopButton = document.getElementById('js-top');

const scrollFunc = () => {
  let y = window.scrollY;

  if (y > 0) {
    refs.scrollToTopButton.className = 'top-link show';
  } else {
    refs.scrollToTopButton.className = 'top-link hide';
  }
};

window.addEventListener('scroll', scrollFunc);

const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;

  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 5);
  }
};

refs.scrollToTopButton.onclick = function (e) {
  e.preventDefault();
  scrollToTop();
};
