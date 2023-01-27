import { Movie } from './api';

const movie = new Movie({
  searchValue: '',
});

const CURRENT_MOVIES = 'currentMovies';
const STORAGE_KEY_WATCHED = 'addToWatched';
const STORAGE_KEY_QUEUE = 'addToQueue';

// * function saveLocalStorageTrendingMovies
// movie.fetchTrendingMovies().then(data => localStorage.setItem('key', JSON.stringify(data.results))).catch(error => console.log(error));
async function saveLocalStorageTrendingMovies() {
  try {
    const trendingMovies = await movie.fetchTrendingMovies();
    const saveTrendingMovies = localStorage.setItem(CURRENT_MOVIES, JSON.stringify(trendingMovies.results));
    return saveTrendingMovies;
  } catch (error) {
    console.log(error);
  }
}


// *function saveLocalStorageToWatched
async function saveLocalStorageToWatched() {
  try {
    const movieDetails = await movie.fetchMovieDetails();
    const saveMovieDetails = localStorage.setItem(STORAGE_KEY_WATCHED, JSON.stringify(movieDetails));
    return saveMovieDetails;
  } catch (error) {
    console.log(error);
  }
}

// *function saveLocalStorageToQueue
async function saveLocalStorageToQueue() {
  try {
    const movieDetails = await movie.fetchMovieDetails();
    const saveMovieDetails = localStorage.setItem(STORAGE_KEY_QUEUE, JSON.stringify(movieDetails));
    return saveMovieDetails;
  } catch (error) {
    console.log(error);
  }
}

export { saveLocalStorageTrendingMovies, saveLocalStorageToWatched, saveLocalStorageToQueue };