import { Movie } from './partials_js/api';
import { Genres } from './partials_js/genres';
import createMarkupCardsFilms from './partials_js/createMarkupCardsFilms';
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

movie
  .fetchMovieGenres()
  .then(createGenresObject)
  .then(saveStorageGenres)
  .catch();
