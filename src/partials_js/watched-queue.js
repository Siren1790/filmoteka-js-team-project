import createMarkupCardsFilms from './createMarkupCardsFilms';
import { refs, refsStorage } from './refs';

const queueBtn = document.querySelectorAll('.header-btn');
const newWatchedBtn = queueBtn[0];
console.log(newWatchedBtn);
const newQueueBtn = queueBtn[1];
console.log(newQueueBtn);

const libraryPageCards = document.querySelector('.js-library');

newWatchedBtn.addEventListener('click', onClickMakeMarkUpWatched);

// refs.onClickMakeMarkUpWatched();

function onClickMakeMarkUpWatched() {
  const arrayFilmsWatched = JSON.parse(
    localStorage.getItem(refsStorage.CURRENT_FILMS)
  ).results;
  console.log(arrayFilmsWatched);

  libraryPageCards.innerHTML = createMarkupCardsFilms(arrayFilmsWatched);
}

// function onClickMakeMarkUpQueue () {

// }

