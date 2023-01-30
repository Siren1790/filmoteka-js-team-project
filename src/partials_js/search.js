import { Movie } from './api';
import createMarkupCardsFilms from './createMarkupCardsFilms';

const markSearchFilms = document.querySelector('.list-films');
let search = '';
const searchValue = document.querySelector('.js-search-form-input');
const searchButton = document.querySelector('.js-search-form');
const searchBadResult = document.querySelector('.js-search-badResult');
searchBadResult.hidden = true;
searchValue.addEventListener('input', onInput);
function onInput() {
  // console.log('searchValue =', searchValue.value);
  search = searchValue.value;
}

async function hideErrorMessage() {
  setTimeout(() => (searchBadResult.hidden = true), 2000);
}

searchButton.addEventListener('submit', onSubmit);
async function onSubmit(event) {
  event.preventDefault();
  const movie = new Movie({
    searchValue: search,
  });

  if (search) {
    searchBadResult.hidden = true;
    const result = movie.fetchSearchMovies();

    result.then(value => {
      const searchAnswer = value.results;
      // console.log('Siren', value);
      if (searchAnswer.length > 0) {
        // console.log('value =', searchAnswer);
        // markup();
        localStorage.setItem('dataArray', JSON.stringify(searchAnswer));
        markSearchFilms.innerHTML = createMarkupCardsFilms(searchAnswer);
      } else {
        searchBadResult.hidden = false;
        hideErrorMessage();
      }
    });
  } else {
    searchBadResult.hidden = false;
    hideErrorMessage();
  }
}
