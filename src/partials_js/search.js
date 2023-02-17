import { movie } from './api';
import createMarkupCardsFilms from './createMarkupCardsFilms';
import { refs } from './refs';
import { saveLocalStorageMovies, getLocalStorage } from './local_storage';
import { preloaderHide, preloaderShow } from './spinner';
import { preparePaginationDynamicList } from './pagination';

refs.searchBadResult.hidden = true;

function hideErrorMessage() {
  setTimeout(() => (refs.searchBadResult.hidden = true), 2000);
}

refs.searchButton.addEventListener('submit', onSubmit);

async function onSubmit(event) {
  console.log(event.currentTarget.searchQuery.value);
  event.preventDefault();
  preloaderShow();
  refs.flag = false;
  if (event.currentTarget.searchQuery.value) {
    refs.searchBadResult.hidden = true;
    movie.setSearchValue(event.currentTarget.searchQuery.value);
    event.currentTarget.searchQuery.value = '';
    movie.resetPage();

    const response = await movie.fetchSearchMovies();
    const searchAnswer = response.results;

    movie.setCurrentPage(response.page);
    movie.setTotalPages(response.total_pages);


    if (searchAnswer.length > 0) {
      saveLocalStorageMovies(response);
      let cardsMovies = getLocalStorage();
      let markup = createMarkupCardsFilms(cardsMovies.results);
      refs.mainMarkFilms.innerHTML = markup;
      refs.searchButton.scrollIntoView({
        block: 'center',
        behavior: 'smooth',
      });

      movie.firstRequest = false;
      preparePaginationDynamicList();
    } else {
      refs.searchBadResult.hidden = false;
      hideErrorMessage();
    }
  } else {
    refs.searchBadResult.hidden = false;
    hideErrorMessage();
  }
  preloaderHide();
}

export { onSubmit };
