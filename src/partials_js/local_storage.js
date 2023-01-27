// import { Movie } from './api';
// const movie = new Movie({
//   // searchValue: '',
// });



// const CURRENT_MOVIES = 'currentMovies';
// const STORAGE_KEY_WATCHED = 'addToWatched';
// const STORAGE_KEY_QUEUE = 'addToQueue';

//* function saveLocalStorageTrendingMovies
// async function saveLocalStorageTrendingMovies() {
//   try {
//     const trendingMovies = await movie.fetchTrendingMovies();
//     const saveTrendingMovies = localStorage.setItem(CURRENT_MOVIES, JSON.stringify(trendingMovies.results));
//     return saveTrendingMovies;
//   } catch (error) {
//     console.log(error);
//   }
// }
// saveLocalStorageTrendingMovies();

// // const btnAddToWatchedAndToQueue = document.querySelector('.js-modal-buttons');

// *function saveLocalStorageToWatched
// const btnAddToWatched = document.querySelector('.js-btn-watched');
// btnAddToWatched.addEventListener('click', saveLocalStorageToWatched);

// async function saveLocalStorageToWatched() {
//   try {
//     const movieDetails = await movie.fetchMovieDetails();

//     const saveMovieDetails = localStorage.setItem(STORAGE_KEY_WATCHED, JSON.stringify(movieDetails));
//     return saveMovieDetails;
//   } catch (error) {
//     console.log(error);
//   }
// }
// saveLocalStorageToWatched();

// *function saveLocalStorageToQueue
// const btnAddToQueue = document.querySelector('.js-btn-queue');
// btnAddToQueue.addEventListener('click', saveLocalStorageToQueue);
// async function saveLocalStorageToQueue() {
//   try {
//     const movieDetails = await movie.fetchMovieDetails();
//     const saveMovieDetails = localStorage.setItem(STORAGE_KEY_QUEUE, JSON.stringify(movieDetails));
//     return saveMovieDetails;
//   } catch (error) {
//     console.log(error);
//   }
// }
// saveLocalStorageToQueue();


//! SERVICE for ocalStorage EXAMPLE
// const save = (key, value) => {
//   try {
//     const serializedState = JSON.stringify(value);
//     localStorage.setItem(key, serializedState);
//   } catch (e) {
//     console.error(e.message);
//   }
// };

// const load = key => {
//   try {
//     const serializedState = localStorage.getItem(key);
//     return serializedState === null ? undefined : JSON.parse(serializedState);
//   } catch (e) {
//     console.error(e.message);
//   }
// };

// const remove = key => {
//   try {
//     localStorage.removeItem(key);
//   } catch (e) {
//     console.error(e.message);
//   }
// };

// export { save, remove, load };