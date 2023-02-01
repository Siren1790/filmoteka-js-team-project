import createMarkupCardsFilms from './createMarkupCardsFilms';
import { refs, refsStorage } from './refs';

const queueBtn = document.querySelectorAll('.header-btn');

const emptyLibraryAnimation = document.querySelector('.library__img-container');
// const emptyLibraryParagraoh = document.querySelector('.empty-paragraph');
const newWatchedBtn = queueBtn[0];
const newQueueBtn = queueBtn[1];

newWatchedBtn.addEventListener('click', onClickMakeMarkUpWatched);
newQueueBtn.addEventListener('click', onClickMakeMarkUpQueue);

hiddenEmptyAnimation();

function liberyDrawings() {
  if (localStorage.getItem(refsStorage.STORAGE_KEY_QUEUE)) {
    onClickMakeMarkUpQueue();
  } else {
    onClickMakeMarkUpWatched();
  }
}

function hiddenEmptyAnimation() {
  if (
    localStorage.getItem(refsStorage.STORAGE_KEY_WATCHED) ||
    localStorage.getItem(refsStorage.STORAGE_KEY_QUEUE)
  ) {
    emptyLibraryAnimation.classList.add('visually-hidden');
    // emptyLibraryParagraoh.classList.add('visually-hidden');
    liberyDrawings();
  } else return;
}

function onClickMakeMarkUpWatched() {
  emptyLibraryAnimation.classList.add('visually-hidden');
  // emptyLibraryParagraoh.classList.add('visually-hidden');
  const arrayFilmsWatched = JSON.parse(
    localStorage.getItem(refsStorage.CURRENT_FILMS)
  ).results;
  newWatchedBtn.classList.add('header-btn-active');
  let markup = createMarkupCardsFilms(arrayFilmsWatched);
  refs.mainMarkFilms.innerHTML = markup;
}

function onClickMakeMarkUpQueue() {
  emptyLibraryAnimation.classList.add('visually-hidden');
  // emptyLibraryParagraoh.classList.add('visually-hidden');
  const arrayFilmsWatched = JSON.parse(
    localStorage.getItem(refsStorage.CURRENT_FILMS)
  ).results;
  newQueueBtn.classList.add('header-btn-active');
  let markup = createMarkupCardsFilms(arrayFilmsWatched);
  refs.mainMarkFilms.innerHTML = markup;
}
