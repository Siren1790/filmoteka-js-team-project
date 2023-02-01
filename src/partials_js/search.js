import { movie } from './api';
import createMarkupCardsFilms from './createMarkupCardsFilms';
import { refs } from './refs';
import { saveLocalStorageMovies, getLocalStorage } from './local_storage';
import { preloaderHide, preloaderShow } from './spinner';
import { preparePaginationDynamicList } from './pagination';

refs.searchBadResult.hidden = true;

async function hideErrorMessage() {
  setTimeout(() => (refs.searchBadResult.hidden = true), 2000);
}

refs.searchButton.addEventListener('submit', onSubmit);

async function onSubmit(event) {
  event.preventDefault();
  preloaderShow();
  if (event.currentTarget.searchQuery.value) {
    refs.searchBadResult.hidden = true;
    movie.setSearchValue(event.currentTarget.searchQuery.value);
    event.currentTarget.searchQuery.value = '';
    movie.resetPage();


    const response = await movie.fetchSearchMovies();
    const searchAnswer = response.results;

    movie.setCurrentPage(response.page);
    movie.setIsSearched(true);
    movie.setTotalPages(response.total_pages);

    if (response.results.length <= 20) {
      refs.listPaginationNode.innerHTML = '';
      const template = `<li class="item-pagination"><button class="btn-pagination">1</button></li>`
      refs.listPaginationNode.insertAdjacentHTML('afterbegin', template)

    } else {
      // implement pagination if movies > 20
    }

    if (searchAnswer.length > 0) {
      saveLocalStorageMovies(response);
      let cardsMovies = getLocalStorage();
      createMarkupCardsFilms(cardsMovies.results);

      movie.firstRequest = false;
      preparePaginationDynamicList();
    } else {
      refs.searchBadResult.hidden = false;
      hideErrorMessage();
    }
  } else {
    movie.setIsSearched(false);
    refs.searchBadResult.hidden = false;
    hideErrorMessage();
  }
  preloaderHide();
}

export { onSubmit };