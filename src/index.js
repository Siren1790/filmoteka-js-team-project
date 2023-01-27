import { Movie } from './partials_js/api';
import { Genres } from './partials_js/genres';
import createMarkupCardsFilms from './partials_js/createMarkupCardsFilms';
// import { save, load, remove } from './partials_js/local_storage';

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

// LESNYAK localStorage for Trending Movies
// movie.fetchTrendingMovies().then(data => localStorage.setItem('key', JSON.stringify(data.results))).catch(error => console.log(error));

const CURRENT_MOVIES = 'currentMovies';
const STORAGE_KEY_WATCHED = 'addToWatched';
const STORAGE_KEY_QUEUE = 'addToQueue';

//* function saveLocalStorageTrendingMovies
async function saveLocalStorageTrendingMovies() {
  try {
    const trendingMovies = await movie.fetchTrendingMovies();
    const saveTrendingMovies = localStorage.setItem(CURRENT_MOVIES, JSON.stringify(trendingMovies.results));
    return saveTrendingMovies;
  } catch (error) {
    console.log(error);
  }
}
saveLocalStorageTrendingMovies();

// const btnAddToWatchedAndToQueue = document.querySelector('.js-modal-buttons');

// * function saveLocalStorageToWatched
const btnAddToWatched = document.querySelector('.js-btn-watched');
btnAddToWatched.addEventListener('click', saveLocalStorageToWatched);

async function saveLocalStorageToWatched() {
  try {
    const movieDetails = await movie.fetchMovieDetails();

    const saveMovieDetails = localStorage.setItem(STORAGE_KEY_WATCHED, JSON.stringify(movieDetails));
    return saveMovieDetails;
  } catch (error) {
    console.log(error);
  }
}
saveLocalStorageToWatched();

//* function saveLocalStorageToQueue
const btnAddToQueue = document.querySelector('.js-btn-queue');
btnAddToQueue.addEventListener('click', saveLocalStorageToQueue);
async function saveLocalStorageToQueue() {
  try {
    const movieDetails = await movie.fetchMovieDetails();
    const saveMovieDetails = localStorage.setItem(STORAGE_KEY_QUEUE, JSON.stringify(movieDetails));
    return saveMovieDetails;
  } catch (error) {
    console.log(error);
  }
}
saveLocalStorageToQueue();

//! SERVICE for ocalStorage EXAMPLE
// const btnAddToQueue = document.querySelector('.js-btn-queue');
// btnAddToQueue.addEventListener('click', saveLocalStorageToQueue);
// async function saveLocalStorageToQueue() {
//   const movieDetails = await movie.fetchMovieDetails();
//   save(STORAGE_KEY_QUEUE, JSON.stringify(movieDetails));
// }
// saveLocalStorageToQueue();