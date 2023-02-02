const BASE_URL_POSTER = 'https://image.tmdb.org/t/p/w500';
import noPhoto from '../images/no_image.jpg';
import { refs } from './refs';
/**
 *
 * @param {*} arrayMovies
 * @returns markUP whith cards films
 */

function markUpGenresInModal(genre_ids, loadGenres) {
  let genersArray = []; // array for genres value
  if (genre_ids) {
    for (const key in loadGenres) {
      if (genre_ids.includes(Number(key))) {
        genersArray.push(' ' + loadGenres[key]);
      }
    }
  } else {
    genersArray = 'Sorry, but no information about genres';
  }
  return genersArray;
}

function markUpMainGenres(genre_ids, loadGenres) {
  let genresForMain = markUpGenresInModal(genre_ids, loadGenres);
  if (genresForMain && genresForMain.length >= 1) {
    if (genresForMain.length > 3 || genresForMain.join('').length > 20) {
      genresForMain.splice(2, 0, ' Other');
      genresForMain.splice(3);
      return genresForMain;
    } else return genresForMain;
  } else return (genresForMain = 'No information about genres');
}

export default function createMarkupCardsFilms(arrayMovies) {
  let markup = arrayMovies
    .map(
      ({ poster_path, title, genre_ids, release_date, vote_average, id }) => {
        let genresState = localStorage.getItem('genres');
        const loadGenres = JSON.parse(genresState);

        let genresLoad = markUpMainGenres(genre_ids, loadGenres);

        const imgRow = poster_path
          ? `<img class="img-cover" src="${BASE_URL_POSTER}${poster_path}" alt="${title}"/>`
          : `<img class="img-cover" src="${noPhoto}" alt="no photo" width="400" height="500">`;

        const ratingRow = vote_average
          ? `<p class="rating">${vote_average.toFixed(1)}</p>`
          : `<p class="rating visually-hidden"></p>`;

        return `<li class="item-films"  data-index-film="${id}">
                ${imgRow}
                <p class="title">${
                  title ? title.toUpperCase() : 'Sorry, no information'
                } </p>
                <div class="film-info">
                  <p class="genre">${genresLoad}</p>
                  <p class="year">${
                    release_date ? release_date.slice(0, 4) : 'N/A'
                  }</p>
                 ${ratingRow}
                </div>
              </li>`;
      }
    )
    .join('');
  return markup;
}
