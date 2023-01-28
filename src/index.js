import { Movie } from './partials_js/api';
import createMarkupCardsFilms from './partials_js/createMarkupCardsFilms';
import { genresCreate } from './partials_js/local_genres-storage';

import {
  saveLocalStorageTrendingMovies,
  saveLocalStorageToWatched,
  saveLocalStorageToQueue,
} from './partials_js/local_storage';
import {
  saveStorageGenres,
  createGenresObject,
} from './partials_js/local_genres-storage';

const mainMarkFilms = document.querySelector('.list-films');

const movie = new Movie({
  searchValue: '',
});

genresCreate();

movie.fetchTrendingMovies().then(data => {
  mainMarkFilms.innerHTML = createMarkupCardsFilms(data.results);
});
saveLocalStorageTrendingMovies();
const btnAddToWatched = document.querySelector('.js-btn-watched');
const btnAddToQueue = document.querySelector('.js-btn-queue');
btnAddToQueue.addEventListener('click', saveLocalStorageToQueue);
btnAddToWatched.addEventListener('click', saveLocalStorageToWatched);

movie
  .fetchMovieGenres()
  .then(createGenresObject)
  .then(saveStorageGenres)
  .catch();
