import { Movie } from './partials_js/api';
import { Genres } from './partials_js/genres';
import createMarkupCardsFilms from './partials_js/createMarkupCardsFilms';

const mainMarkFilms = document.querySelector('.list-films');

const movie = new Movie({
  // searchValue: '',
});

movie.fetchTrendingMovies();
movie.fetchSearchMovies();
movie.fetchMovieDetails();
movie.fetchMovieVideo();
movie.fetchMovieGenres();

movie.fetchTrendingMovies().then(data => {
  mainMarkFilms.innerHTML = createMarkupCardsFilms(data.results);
});