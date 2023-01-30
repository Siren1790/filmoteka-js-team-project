import { movie } from './api';
import { refs, refsStorage } from './refs';

/**
 * function saveLocalStorageTrendingMovies
 */
async function saveLocalStorageTrendingMovies() {
  const trendingMovies = await movie.fetchTrendingMovies();
  localStorage.setItem(refsStorage.CURRENT_FILMS, JSON.stringify(trendingMovies.results));
}
saveLocalStorageTrendingMovies();

/**
 * function saveLocalStorageToWatched
 */
async function saveLocalStorageToWatched() {
  const movieDetails = await movie.fetchMovieDetails();
  localStorage.setItem(refsStorage.STORAGE_KEY_WATCHED, JSON.stringify(movieDetails));
}

/**
 * function saveLocalStorageToQueue
 */
async function saveLocalStorageToQueue() {
  const movieDetails = await movie.fetchMovieDetails();
  localStorage.setItem(refsStorage.STORAGE_KEY_QUEUE, JSON.stringify(movieDetails));
}

/**
 * function saveLocalStorageSearchMovie
 */
async function saveLocalStorageSearchMovie() {
  const searchMovie = await movie.fetchSearchMovies();
  localStorage.setItem(refsStorage.CURRENT_FILMS, JSON.stringify(searchMovie.results));
}

refs.btnToWatched.addEventListener('click', saveLocalStorageToWatched);
refs.btnToQueue.addEventListener('click', saveLocalStorageToQueue);

export { saveLocalStorageToWatched, saveLocalStorageToQueue, saveLocalStorageSearchMovie };

/**
 *  add to index.html
 <script type="module" src="./partials_js/local_storage.js"></script> */