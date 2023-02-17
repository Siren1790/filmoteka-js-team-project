import createMarkupCardsFilms from './createMarkupCardsFilms';
import { refs, refsStorage } from './refs';

const queueBtn = document.querySelectorAll('.header-btn');

const watchedBtnLib = queueBtn[0];
const queueBtnLib = queueBtn[1];

const emptyLibraryAnimation = document.querySelector('.library__img-container');
const emptyLibraryParagraph = document.querySelector('.empty-paragraph');

openLibary();

function openLibary() {
  refs.flag = true;
  watchedBtnLib.classList.add('header-btn-active');
  watchedBtnLib.addEventListener('click', onClickMakeMarkFilms);
  queueBtnLib.addEventListener('click', onClickMakeMarkFilms);
}

function onClickMakeMarkFilms(event) {
  let key = '';
  if (event.target.textContent === 'WATCHED'){
    key = refsStorage.STORAGE_KEY_WATCHED;
    watchedBtnLib.classList.add('header-btn-active');
    queueBtnLib.classList.remove('header-btn-active');
  }else {
    key = refsStorage.STORAGE_KEY_QUEUE;
    watchedBtnLib.classList.remove('header-btn-active');
    queueBtnLib.classList.add('header-btn-active');
  }

  const arrayFilmsWatched = JSON.parse(
    localStorage.getItem(key)
  );

  const arr = JSON.parse(
    localStorage.getItem(refsStorage.CURRENT_FILMS)
  );
  arr.results = arrayFilmsWatched;

 localStorage.setItem(refsStorage.CURRENT_FILMS, JSON.stringify(arr));

 const films = JSON.parse(
  localStorage.getItem(refsStorage.CURRENT_FILMS)
);

  if (arrayFilmsWatched && arrayFilmsWatched.length) {
    emptyLibraryAnimation.classList.add('visually-hidden');
    emptyLibraryParagraph.classList.add('visually-hidden');
    let markup = createMarkupCardsFilms(films.results);
    refs.mainMarkFilms.innerHTML = markup;
  } else {
    refs.mainMarkFilms.innerHTML = '';
    emptyLibraryAnimation.classList.remove('visually-hidden');
    emptyLibraryParagraph.classList.remove('visually-hidden');
  }
}