import showLibrary from './libary_partials/show-library';
import { refs, refsStorage } from './refs';

const queueBtn = document.querySelectorAll('.header-btn');

const watchedBtnLib = queueBtn[0];
const queueBtnLib = queueBtn[1];

function openLibrary() {
  refs.flag = true;
  watchedBtnLib.classList.add('header-btn-active');

}

watchedBtnLib.addEventListener('click', onClickMakeMarkFilms);
queueBtnLib.addEventListener('click', onClickMakeMarkFilms);

function onClickMakeMarkFilms(event) {
  refs.key = '';
  if (event.target.textContent === 'WATCHED') {
    refs.key = refsStorage.STORAGE_KEY_WATCHED;
    watchedBtnLib.classList.add('header-btn-active');
    queueBtnLib.classList.remove('header-btn-active');
  } else {
    refs.key = refsStorage.STORAGE_KEY_QUEUE;
    watchedBtnLib.classList.remove('header-btn-active');
    queueBtnLib.classList.add('header-btn-active');
  }
  showLibrary();
}

openLibrary();
