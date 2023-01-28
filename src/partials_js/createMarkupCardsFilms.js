import { Movie } from './api';
import {
  markUpMainGenres,
  createGenresObject,
  saveStorageGenres,
} from './local_genres-storage';
const BASE_URL_POSTER = 'https://image.tmdb.org/t/p/w500';

const movie = new Movie({
  searchValue: '',
});

/**
 *
 * @param {*} arrayMovies
 * @returns markUP whith cards films
 */
export default function createMarkupCardsFilms(arrayMovies) {
  let markup = arrayMovies
    .map(({ poster_path, title, genre_ids, release_date, vote_average }) => {
      let genresState = localStorage.getItem('genres');
      let genresLoad;
      if (!localStorage.genres) {
        movie
          .fetchMovieGenres()
          .then(createGenresObject)
          .then(saveStorageGenres)
          .catch();
        genresState = localStorage.getItem('genres');
        const loadGenres = JSON.parse(genresState); // array id(genres): genres(value)
        genresLoad = markUpMainGenres(genre_ids, loadGenres);
      } else {
        const loadGenres = JSON.parse(genresState); // array id(genres): genres(value)
        genresLoad = markUpMainGenres(genre_ids, loadGenres);
      }

      const imgRow = poster_path
        ? `<img src="${BASE_URL_POSTER}${poster_path}" />`
        : `<img src="./images/no_image.jpg" alt="no photo" width="400" height="500">`;

      return `<li class="item-films">
                ${imgRow}
                <p class="title">${title ? title : 'Sorry, no information'} </p>
                <div class="film-info">
                  <p class="genre">${genresLoad}</p>
                  <p class="year">${
                    release_date
                      ? release_date.slice(0, 4)
                      : 'Sorry, no information'
                  }</p>
                  <p class="rating">${
                    vote_average
                      ? vote_average.toFixed(1)
                      : 'Sorry, no information'
                  }</p>
                </div>
              </li>`;
    })
    .join('');

  return markup;
}
