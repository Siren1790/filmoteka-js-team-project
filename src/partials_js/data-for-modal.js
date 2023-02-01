// const BASE_URL_POSTER = 'https://image.tmdb.org/t/p/w500';
// import axios from 'axios';
// import { refs, refsApi, refsStorage } from './refs';

function restDataForModal(e) {
  const targetClickMovieCard = e.target.closest('.item-films');
  const currentMoviesFromStorage = JSON.parse(
    localStorage.getItem('currentFilms')
  );
  const movieIdFromClick = targetClickMovieCard.dataset.indexFilm;

  const indexOfMovie = currentMoviesFromStorage.results.findIndex(
    movieObj => movieObj.id == movieIdFromClick
  );

  return currentMoviesFromStorage.results[indexOfMovie];
}

function createStringOfGenres(arrayCodesOfGenres) {
  const genres = JSON.parse(localStorage.getItem('genres'));
  return arrayCodesOfGenres.reduce((stringGenres, keyOfGenre) => {
    if (!stringGenres) {
      return genres[keyOfGenre];
    }
    return stringGenres + ', ' + genres[keyOfGenre];
  }, '');
}

export { restDataForModal, createStringOfGenres };
