import { movie } from "./api";
import createMarkupCardsFilms from "./createMarkupCardsFilms";
import {saveLocalStorageMovies, getLocalStorage} from './local_storage';
import {preloaderHide, preloaderShow } from './spinner';
import { pagination } from "./pagination";
import { saveStorageGenres, createGenresObject } from './local_genres-storage';

async function fetchData (){
    preloaderShow();
    const movies = await movie.fetchTrendingMovies();
    const genres = await movie.fetchMovieGenres();
    saveLocalStorageMovies(movies);
    movie.setCurrentPage(movies.page);
    movie.setTotalPages(movies.total_pages);
    const objGenres = createGenresObject(genres);
    saveStorageGenres(objGenres);
    let cardsMovies = getLocalStorage()
    createMarkupCardsFilms(cardsMovies.results);
    pagination();
    preloaderHide();
}
fetchData();

// preloaderShow();

// movie.fetchMovieGenres()
//   .then(createGenresObject)
//   .then(saveStorageGenres)

// movie.fetchTrendingMovies()
//     .then(async data => {
//         saveLocalStorageMovies(data);
//         // let cardsMovies = await getLocalStorage()
//         createMarkupCardsFilms(cardsMovies.results);
//         preloaderHide();
//         movie.setCurrentPage(data.page);
//         movie.setTotalPages(data.total_pages);
//         pagination();
// });