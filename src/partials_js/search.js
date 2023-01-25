// autor: Ruslan branch Search_FT-10

import { Movie } from './api';
import { markup } from './markup_service';

let search = '';
const searchValue = document.querySelector('search-form-input');
const searchButton = document.querySelector('.search-form');

searchValue.addEventListener('input', onInput);
function onInput() {
  search = searchValue.value;
}

searchButton.addEventListener('submit', onSubmit);
async function onSubmit(event) {
    event.preventDefault();
    const movie = new Movie({
        searchValue: search,
    });
    
    console.log(movie.fetchSearchMovies());
    // markup();
}