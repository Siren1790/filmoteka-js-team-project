
import { movie } from './api';
import { refs } from './refs';
import createMarkupCardsFilms from './createMarkupCardsFilms';
import { saveLocalStorageMovies, getLocalStorage } from './local_storage';
import { preloaderHide, preloaderShow } from './spinner';
import { preparePaginationDynamicList } from './pagination';
import { saveStorageGenres, createGenresObject } from './local_genres-storage';
import { refs } from './refs';


async function fetchData() {
  preloaderShow();
  refs.flag = false;
  const movies = await movie.fetchTrendingMovies();
  const genres = await movie.fetchMovieGenres();
  saveLocalStorageMovies(movies);
  movie.setCurrentPage(movies.page);
  movie.setTotalPages(movies.total_pages);
  const objGenres = createGenresObject(genres);
  saveStorageGenres(objGenres);
  let cardsMovies = getLocalStorage();
  let markup = createMarkupCardsFilms(cardsMovies.results);
  refs.mainMarkFilms.innerHTML = markup;
  refs.searchButton.scrollIntoView({ block: 'center', behavior: 'smooth' });
  preparePaginationDynamicList();
  preloaderHide();
}

fetchData();


export { fetchData };

