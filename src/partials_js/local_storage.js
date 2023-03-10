import { movie } from './api';
import { refsStorage } from './refs';

/**
 * function saveLocalStorageTrendingMovies
 */
function saveLocalStorageMovies(data) {
  localStorage.setItem(refsStorage.CURRENT_FILMS, JSON.stringify(data));
}

function getLocalStorage() {
  return JSON.parse(localStorage.getItem(refsStorage.CURRENT_FILMS));
}

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

export { saveLocalStorageMovies, getLocalStorage, saveLocalStorageToWatched, saveLocalStorageToQueue };
