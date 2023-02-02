import createMarkupCardsFilms from './createMarkupCardsFilms';
import { refs, refsStorage } from './refs';

const queueBtn = document.querySelectorAll('.header-btn');

const emptyLibraryAnimation = document.querySelector('.library__img-container');
const emptyLibraryParagraoh = document.querySelector('.empty-paragraph');
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
    emptyLibraryParagraoh.classList.add('visually-hidden');
    liberyDrawings();
  } else return;
}

function onClickMakeMarkUpWatched() {
  refs.mustToRedraw = 1;

  if (localStorage.getItem(refsStorage.STORAGE_KEY_WATCHED)) {
    emptyLibraryAnimation.classList.add('visually-hidden');
    emptyLibraryParagraoh.classList.add('visually-hidden');
    newQueueBtn.classList.remove('header-btn-active');
    const arrayFilmsWatched = JSON.parse(
      localStorage.getItem(refsStorage.STORAGE_KEY_WATCHED)
    );
    const objCurFilms = JSON.parse(
      localStorage.getItem(refsStorage.CURRENT_FILMS)
    );
    objCurFilms.results = arrayFilmsWatched;
    localStorage.setItem(
      refsStorage.CURRENT_FILMS,
      JSON.stringify(objCurFilms)
    );
    newWatchedBtn.classList.add('header-btn-active');
    let markup = createMarkupCardsFilms(arrayFilmsWatched);
    refs.mainMarkFilms.innerHTML = markup;
  } else {
    newQueueBtn.classList.remove('header-btn-active');
    newWatchedBtn.classList.add('header-btn-active');
    emptyLibraryAnimation.classList.remove('visually-hidden');
    emptyLibraryParagraoh.classList.remove('visually-hidden');
    refs.mainMarkFilms.innerHTML = '';
  }
}

function onClickMakeMarkUpQueue() {
  refs.mustToRedraw = 1;

  if (localStorage.getItem(refsStorage.STORAGE_KEY_QUEUE)) {
    emptyLibraryAnimation.classList.add('visually-hidden');
    emptyLibraryParagraoh.classList.add('visually-hidden');
    newWatchedBtn.classList.remove('header-btn-active');
    newQueueBtn.classList.add('header-btn-active');
    const arrayFilmsWatched = JSON.parse(
      localStorage.getItem(refsStorage.STORAGE_KEY_QUEUE)
    );

    const objCurFilms = JSON.parse(
      localStorage.getItem(refsStorage.CURRENT_FILMS)
    );
    objCurFilms.results = arrayFilmsWatched;
    localStorage.setItem(
      refsStorage.CURRENT_FILMS,
      JSON.stringify(objCurFilms)
    );
    let markup = createMarkupCardsFilms(arrayFilmsWatched);
    refs.mainMarkFilms.innerHTML = markup;
  } else {
    newWatchedBtn.classList.remove('header-btn-active');
    newQueueBtn.classList.add('header-btn-active');
    emptyLibraryAnimation.classList.remove('visually-hidden');
    emptyLibraryParagraoh.classList.remove('visually-hidden');
    refs.mainMarkFilms.innerHTML = '';
  }
}
