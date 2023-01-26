// autor: Ruslan branch Search_FT-10

import { Movie } from './api';
import { markup } from './markup_service';

let search = '';
const searchValue = document.querySelector('.search-form-input');
const searchButton = document.querySelector('.search-form');
const searchBadResult = document.querySelector('.search-badResult');
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
