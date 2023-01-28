import { Movie } from './partials_js/api';
import { Genres } from './partials_js/genres';
import createMarkupCardsFilms from './partials_js/createMarkupCardsFilms';
import {
  saveStorageGenres,
  createGenresObject,
} from './partials_js/local_genres-storage';

const mainMarkFilms = document.querySelector('.list-films');

const movie = new Movie({
  searchValue: '',
});

movie
  .fetchMovieGenres()
  .then(createGenresObject)
  .then(saveStorageGenres)
  .catch();

movie.fetchTrendingMovies().then(data => {
  mainMarkFilms.innerHTML = createMarkupCardsFilms(data.results);
});
