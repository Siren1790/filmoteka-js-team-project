import { markUpMainGenres, genresCreate } from './local_genres-storage';
const BASE_URL_POSTER = 'https://image.tmdb.org/t/p/w500';
import noPhoto from '../images/no_image.jpg';
import { refs } from './refs';
genresCreate();
/**
 *
 * @param {*} arrayMovies
 * @returns markUP whith cards films
 */
export default function createMarkupCardsFilms(arrayMovies) {
  let markup = arrayMovies
    .map(
      ({ poster_path, title, genre_ids, release_date, vote_average, id }) => {
        let genresState = localStorage.getItem('genres');
        const loadGenres = JSON.parse(genresState);

        if (!localStorage.genres) {
          // do not move, works no more than 1 time!!!!!!
          genresCreate();
          genresState = localStorage.getItem('genres');
        }

        let genresLoad = markUpMainGenres(genre_ids, loadGenres);

        const imgRow = poster_path
          ? `<img class="img-cover" src="${BASE_URL_POSTER}${poster_path}" />`
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

  refs.searchButton.scrollIntoView({ block: 'center', behavior: 'smooth' });

  return markup;
}
