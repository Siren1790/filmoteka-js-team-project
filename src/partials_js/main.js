import { movie } from "./api";
import createMarkupCardsFilms from "./createMarkupCardsFilms";
import {saveLocalStorageMovies, getLocalStorage} from './local_storage';
import {preloaderHide, preloaderShow } from './spinner';

preloaderShow();
movie.fetchTrendingMovies()
    .then(data => {
        saveLocalStorageMovies(data);
        let cardsMovies = getLocalStorage()
        console.log("Paga", data.page);
        console.log('Total', data.total_pages)
        createMarkupCardsFilms(cardsMovies.results);
        preloaderHide();
});
