import { Movie } from './api';

export default function createMarkupCardsFilms(arrayMovies) {
  return (markup = arrayMovies
    .map(
      ({
        poster_path,
        title,
        genre_ids,
        release_date,
        vote_average,
      }) => `<li class="item-films">
              <img src="https://image.tmdb.org/t/p/w500${poster_path}" />
              <p class="title">${title}</p>
              <div class="film-info">
                <p class="genre">${genre_ids},</p>
                <p class="year">${release_date}</p>
                <p class="rating">${vote_average}</p>
              </div>
            </li>`
    )
    .join(''));
}

const mainMarkFilms = document.querySelector('.list-films');

const movie = new Movie({
  searchValue: '',
});

movie.fetchTrendingMovies().then(data => {
  mainMarkFilms.insertAdjacentHTML(
    'beforeend',
    createMarkupCardsFilms(data.results)
  );
});
