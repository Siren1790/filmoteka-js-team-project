
import { movie } from './api';
import createMarkupCardsFilms from './createMarkupCardsFilms';
import { refs } from './refs';
import {saveLocalStorageMovies, getLocalStorage} from './local_storage';
import {preloaderHide, preloaderShow } from './spinner';
import { pagination } from "./pagination";

refs.searchBadResult.hidden = true;

async function hideErrorMessage() {
  setTimeout(() => (refs.searchBadResult.hidden = true), 2000);
}

refs.searchButton.addEventListener('submit', onSubmit);

function onSubmit(event) {
  event.preventDefault();
  preloaderShow();
  if (event.currentTarget.searchQuery.value) {
    refs.searchBadResult.hidden = true;
    movie.setSearchValue(event.currentTarget.searchQuery.value);
    event.currentTarget.searchQuery.value = '';
    movie.fetchSearchMovies()
      .then(data => {
        const searchAnswer = data.results;

        if (searchAnswer.length > 0) {
          saveLocalStorageMovies(searchAnswer);
          let cardsMovies = getLocalStorage()
          createMarkupCardsFilms(cardsMovies);
          movie.setCurrentPage(data.page);
          movie.setTotalPages(data.total_pages);
          movie.firstRequest = false;
          pagination();
          // preloaderHide();
        } else {
          refs.searchBadResult.hidden = false;
          hideErrorMessage();
          // preloaderHide();
        }
    });
  } else {
    refs.searchBadResult.hidden = false;
    hideErrorMessage();
  }
  preloaderHide();
}
