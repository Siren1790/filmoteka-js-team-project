import createMarkupCardsFilms from '../createMarkupCardsFilms';
import { refs, refsStorage } from '../refs';

const emptyLibraryAnimation = document.querySelector('.library__img-container');
const emptyLibraryParagraph = document.querySelector('.empty-paragraph');

export default function showLibrary() {
  const arrayFilmsWatched = JSON.parse(localStorage.getItem(refs.key));

  const arr = JSON.parse(localStorage.getItem(refsStorage.CURRENT_FILMS));
  arr.results = arrayFilmsWatched;

  localStorage.setItem(refsStorage.CURRENT_FILMS, JSON.stringify(arr));

  const films = JSON.parse(localStorage.getItem(refsStorage.CURRENT_FILMS));

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
