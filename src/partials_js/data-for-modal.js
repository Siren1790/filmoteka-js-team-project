const BASE_URL_POSTER = 'https://image.tmdb.org/t/p/w500';
const genres = JSON.parse(localStorage.getItem('genres'));
import axios from 'axios';
import { refs, refsApi, refsStorage } from './refs';

// const divCard = document.querySelector('.list-films');

// refs.mainMarkFilms.addEventListener('click', restDataForModal);

function restDataForModal(e) {
  // if (e.currentTarget === e.target) return;

  // console.log('err');

  const targetClickMovieCard = e.target.closest('.item-films');
  const currentMoviesFromStorage = JSON.parse(
    localStorage.getItem('currentFilms')
  );

  // console.dir(targetClickMovieCard);
  const movieIdFromClick = targetClickMovieCard.dataset.indexFilm;
  // .textContent.trim();

  // console.log(currentMoviesFromStorage);

  const indexOfMovie = currentMoviesFromStorage.findIndex(
    movieObj => movieObj.id == movieIdFromClick
  );
  // console.log(currentMoviesFromStorage[indexOfMovie]);

  return currentMoviesFromStorage[indexOfMovie];
  // const currentMovie = currentMoviesFromStorage[indexOfMovie];

  // dataObjForModal = createDataObjectForModal(currentMovie);
  // console.log(dataObjForModal);
}

function createStringOfGenres(arrayCodesOfGenres) {
  const arrayStringGenresMovie = arrayCodesOfGenres.reduce(
    (arrayStringsGenres, keyOfGenre) => {
      arrayStringsGenres.push(genres[keyOfGenre]);
      return arrayStringsGenres;
    },
    []
  );
  return arrayStringGenresMovie.join(', ');
}

// function createDataObjectForModal(fullObjectMovie) {
//   const {
//     // poster_path,
//     // title,
//     original_title,
//     vote_average,
//     vote_count,
//     popularity,
//     genre_ids,
//     overview,
//   } = fullObjectMovie;

//   const dataObjForModal = {
//     poster: BASE_URL_POSTER + poster_path,
//     title,
//     original_title,
//     rating: vote_average,
//     votes: vote_count,
//     popularity,
//     genres: createStringOfGenres(genre_ids),
//     about: overview,
//   };

//   return dataObjForModal;
// }

export { restDataForModal, createStringOfGenres };

async function fetchMovieVideo(id = 505642) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/videos`,
      {
        params: {
          api_key: refsApi.API_KEY,
        },
      }
    );

    console.log(response.data);
    console.log('Trailer Response Results', response.data.results);
    console.log('Trailer Response Results Key', response.data.results[0].key);
    return response.data.results[0].key;
  } catch (error) {
    console.error(error);
  }
}

// fetchMovieVideo();
