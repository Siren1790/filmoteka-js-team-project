import { movie } from "./api";
import createMarkupCardsFilms from "./createMarkupCardsFilms";
import {saveLocalStorageMovies, getLocalStorage} from './local_storage';
import {preloaderHide, preloaderShow } from './spinner';
import { pagination } from "./pagination";

preloaderShow();
movie.fetchTrendingMovies()
    .then(data => {
        saveLocalStorageMovies(data);
        let cardsMovies = getLocalStorage()
        createMarkupCardsFilms(cardsMovies.results);
        preloaderHide();
        movie.setCurrentPage(data.page);
        movie.setTotalPages(data.total_pages);
        pagination();
});
