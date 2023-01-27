import { Movie } from './partials_js/api';
import { Genres } from './partials_js/genres';
import createMarkupCardsFilms from './partials_js/createMarkupCardsFilms';
import { saveLocalStorageTrendingMovies, saveLocalStorageToWatched, saveLocalStorageToQueue } from './partials_js/local_storage';

const mainMarkFilms = document.querySelector('.list-films');

const movie = new Movie({
  searchValue: '',
});

// movie.fetchSearchMovies();
// movie.fetchMovieDetails();
// movie.fetchMovieVideo();
// movie.fetchMovieGenres();

movie.fetchTrendingMovies().then(data => {
  mainMarkFilms.innerHTML = createMarkupCardsFilms(data.results);
});

saveLocalStorageTrendingMovies();
const btnAddToWatched = document.querySelector('.js-btn-watched');
const btnAddToQueue = document.querySelector('.js-btn-queue');
btnAddToQueue.addEventListener('click', saveLocalStorageToQueue);
btnAddToWatched.addEventListener('click', saveLocalStorageToWatched);