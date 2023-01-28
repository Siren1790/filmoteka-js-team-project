import { markUpMainGenres } from './local_genres-storage';
const BASE_URL_POSTER = 'https://image.tmdb.org/t/p/w500';

/**
 *
 * @param {*} arrayMovies
 * @returns markUP whith cards films
 */
export default function createMarkupCardsFilms(arrayMovies, loadGenres) {
  let markup = arrayMovies
    .map(({ poster_path, title, genre_ids, release_date, vote_average }) => {
      let genresLoad = markUpMainGenres(genre_ids, loadGenres);

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
