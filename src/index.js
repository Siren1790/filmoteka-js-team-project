import { Movie } from './partials_js/api';
import { Genres } from './partials_js/genres';
import createMarkupCardsFilms from './partials_js/createMarkupCardsFilms';

import { saveLocalStorageTrendingMovies, saveLocalStorageToWatched, saveLocalStorageToQueue } from './partials_js/local_storage';
import {
  saveStorageGenres,
  createGenresObject,
} from './partials_js/local_genres-storage';

const mainMarkFilms = document.querySelector('.list-films');
const genresState = localStorage.getItem('genres');
const loadGenres = JSON.parse(genresState); // array id(genres): genres(value)

const movie = new Movie({
  searchValue: '',
});

movie.fetchTrendingMovies().then(data => {
  mainMarkFilms.innerHTML = createMarkupCardsFilms(data.results, loadGenres);
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
