import { Movie } from './partials_js/api';
import createMarkupCardsFilms from './partials_js/createMarkupCardsFilms';
import { genresCreate } from './partials_js/local_genres-storage';

const mainMarkFilms = document.querySelector('.list-films');

const movie = new Movie({
  searchValue: '',
});

genresCreate();

movie.fetchTrendingMovies().then(data => {
  mainMarkFilms.innerHTML = createMarkupCardsFilms(data.results);
});
