
import { movie } from './api';
import createMarkupCardsFilms from './createMarkupCardsFilms';
import { refs } from './refs';

refs.searchBadResult.hidden = true;

async function hideErrorMessage() {
  setTimeout(() => (refs.searchBadResult.hidden = true), 2000);
}

refs.searchButton.addEventListener('submit', onSubmit);

async function onSubmit(event) {
  event.preventDefault();
  if (event.currentTarget.searchQuery.value) {
    refs.searchBadResult.hidden = true;
    movie.setSearchValue(event.currentTarget.searchQuery.value);
    event.currentTarget.searchQuery.value = '';
    const result = movie.fetchSearchMovies();

    result.then(value => {
      const searchAnswer = value.results;
      if (searchAnswer.length > 0) {
        refs.markSearchFilms.innerHTML = createMarkupCardsFilms(searchAnswer);
      } else {
        refs.searchBadResult.hidden = false;
        hideErrorMessage();
      }
    });
  } else {
    refs.searchBadResult.hidden = false;
    hideErrorMessage();
  }
}
