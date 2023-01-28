// autor: Ruslan branch Search_FT-10

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
  console.log('searchValue =', searchValue.value);
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
      console.log('value.length =', searchAnswer.length);
      if (searchAnswer.length > 0) {
        console.log('value =', searchAnswer);
        // markup();
        markSearchFilms.innerHTML = createMarkupCardsFilms(searchAnswer);
      } else {
        searchBadResult.hidden = false;
        hideErrorMessage();
        searchValue.value = '';
      }
    });
  } else {
    searchBadResult.hidden = false;
    hideErrorMessage();
  }
}
