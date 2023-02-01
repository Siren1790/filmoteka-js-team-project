const BASE_URL_POSTER = 'https://image.tmdb.org/t/p/w500';
const genres = JSON.parse(localStorage.getItem('genres'));
import axios from 'axios';
import { refs, refsApi, refsStorage } from './refs';

function restDataForModal(e) {
  const targetClickMovieCard = e.target.closest('.item-films');
  const currentMoviesFromStorage = JSON.parse(
    localStorage.getItem('currentFilms')
  );
  const movieIdFromClick = targetClickMovieCard.dataset.indexFilm;

  const indexOfMovie = currentMoviesFromStorage.results.findIndex(
    movieObj => movieObj.id == movieIdFromClick
  );
  console.log(indexOfMovie);

  return currentMoviesFromStorage.results[indexOfMovie];
}

function createStringOfGenres(arrayCodesOfGenres) {
  return arrayCodesOfGenres.reduce((stringGenres, keyOfGenre) => {
    if (!stringGenres) {
      return genres[keyOfGenre];
    }
    return stringGenres + ', ' + genres[keyOfGenre];
  }, '');
}

export { restDataForModal, createStringOfGenres };
