const BASE_URL_POSTER = 'https://image.tmdb.org/t/p/w500';
const genres = JSON.parse(localStorage.getItem('genres'));

const divCard = document.querySelector('.list-films');

divCard.addEventListener('click', restDataForModal);

function restDataForModal(e) {
  if (e.currentTarget === e.target) return;

  const targetClickMovieCard = e.target.closest('.item-films');
  const currentMoviesFromStorage = JSON.parse(
    localStorage.getItem('currentMovies')
  );
  const titleMoviesFromClick = targetClickMovieCard
    .querySelector('.title')
    .textContent.trim();

  const indexOfMovie = currentMoviesFromStorage.findIndex(
    movieObj => movieObj.title === titleMoviesFromClick
  );

  const currentMovie = currentMoviesFromStorage[indexOfMovie];

  dataObjForModal = createDataObjectForModal(currentMovie);
  console.log(dataObjForModal);
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

function createDataObjectForModal(fullObjectMovie) {
  const {
    poster_path,
    title,
    original_title,
    vote_average,
    vote_count,
    popularity,
    genre_ids,
    overview,
  } = fullObjectMovie;

  const dataObjForModal = {
    poster: BASE_URL_POSTER + poster_path,
    title,
    original_title,
    rating: vote_average,
    votes: vote_count,
    popularity,
    genres: createStringOfGenres(genre_ids),
    about: overview,
  };

  return dataObjForModal;
}

export { restDataForModal };
