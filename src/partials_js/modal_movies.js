import { restDataForModal, createStringOfGenres } from './data-for-modal';
import { markUpGenresInModal } from './createMarkupCardsFilms';
import { saveLocalStorageToWatched, saveLocalStorageToQueue } from './local_storage';
import { refsStorage } from './refs';
import noPhoto from '../images/no_image.jpg';

const BASE_URL_POSTER = 'https://image.tmdb.org/t/p/w500';
const backdropModal = document.querySelector('.js-markup__modal');
const modal = document.querySelector('.js-modal-window');
modal.addEventListener('click', openModal);

function openModal(event) {
  // if (event.currentTarget == event.target) {
  //   return
  // }
  backdropModal.classList.remove('visually-hidden');
  const objectInfoMovie = restDataForModal(event);
  const markup = createMarkupModal(objectInfoMovie);
  backdropModal.innerHTML = markup;



  document.body.classList.add('stop-scrolling');
  addEventListenerToBtn();
}

function createMarkupModal(objMovieInfo) {
  const {
    id,
    poster_path,
    title,
    original_title,
    vote_average,
    vote_count,
    popularity,
    genre_ids,
    overview,
  } = objMovieInfo;

  const imgSource = poster_path ? BASE_URL_POSTER + poster_path : noPhoto;

  const markup = `<div class="movie-card" id="bright">
        <div class="button-wrapper">
            <div class="button-container">
                <button class="close-button" id='close-button'>Close</button>
            </div>
            <div class="button-container">
                <button class="watch-trailer js-watch-trailer" id='watch-trailer'>Watch Trailer</button>
            </div>
        </div>

        <div class="info-wrapper">

            <div class="">
                <img class="card-main-poster"
                    src="${imgSource}" />
            </div>

            <div class="info-section">
                <div class="title-wrapper">
                    <h1 class="card-movie-title">${title}</h1>
                </div>

                <table class="card-movie-info">
                    <tr class="row">
                        <td class="row-title">Vote / Votes</td>
                        <td class="row-value"><span class="votes">${vote_average.toFixed(
    1
  )}</span> / ${vote_count}</td>
                    </tr>
                    <tr class="row">
                        <td class="row-title">Popularity</td>
                        <td class="row-value">${popularity}</td>
                    </tr>
                    <tr class="row">
                        <td class="row-title">Original Title</td>
                        <td class="row-value row-title-original">${original_title}</td>
                    </tr>
                    <tr class="row">
                        <td class="row-title">Genre</td>
    <td class="row-value genres-row">${createStringOfGenres(genre_ids)}</td>
                    </tr>
                </table>

                <div class="movie-descr">
                    <p class="movie-descr__about">About</p>
                    <p class="movie-descr__text">
                        ${overview}
                    </p>
                </div>

                <div class="desktop-wrapper">
                <ul class="modal-buttons">
                    <li><button type="button" class="watch-btn js-btn-watched" data-id="${id}">Add to Watched</button></li>
                    <li><button type="button" class="queue-btn js-btn-queue" data-id="${id}">Add to Queue</button></li>
                </ul>

                </div>
            </div>
        </div>

    </div>`;

  return markup;
}

function addEventListenerToBtn() {
  const watchBtn = document.querySelector('.js-btn-watched');
  const queueBtn = document.querySelector('.js-btn-queue');

  const movieId = watchBtn.dataset.id;
  const indexOfMovieInWatched = checkForMovieInLocalStorage(movieId, refsStorage.STORAGE_KEY_WATCHED);
  const indexOfMovieInQueue = checkForMovieInLocalStorage(movieId, refsStorage.STORAGE_KEY_QUEUE);

  // if (!) {

  // }
  //*  watchBtn.addEventListener
  watchBtn.addEventListener('click', (e) => {
    addSelectedFilmsLocalStorage(e, refsStorage.STORAGE_KEY_WATCHED);
    // const pushArray = [];
    // array = JSON.parse(localStorage.getItem(refsStorage.CURRENT_FILMS));
    // const indexOfMovie = array.results.findIndex(movieObj => movieObj.id == e.currentTarget.dataset.id);
    // // array.results[indexOfMovie];
    // pushArray.push(array.results[indexOfMovie]);
    // console.log(pushArray);

    // arrayWatched = JSON.parse(localStorage.getItem(refsStorage.STORAGE_KEY_WATCHED));
    // console.log(arrayWatched);
    // if (arrayWatched) {
    //   arrayWatched.push(array.results[indexOfMovie]);
    //   localStorage.setItem(refsStorage.STORAGE_KEY_WATCHED, JSON.stringify(arrayWatched));
    // } else {
    //   localStorage.setItem(refsStorage.STORAGE_KEY_WATCHED, JSON.stringify(pushArray));
    // }
  });


  // * queueBtn.addEventListene
  queueBtn.addEventListener('click', (e) => {
    addSelectedFilmsLocalStorage(e, refsStorage.STORAGE_KEY_QUEUE);
    //   const pushArray = [];
    //   array = JSON.parse(localStorage.getItem(refsStorage.CURRENT_FILMS));
    //   const indexOfMovie = array.results.findIndex(movieObj => movieObj.id == e.currentTarget.dataset.id);
    //   console.log(array.results[indexOfMovie]);
    //   pushArray.push(array.results[indexOfMovie]);
    //   console.log(pushArray);

    //   arrayWatched = JSON.parse(localStorage.getItem(refsStorage.STORAGE_KEY_QUEUE));
    //   console.log(arrayWatched);
    //   if (arrayWatched) {
    //     arrayWatched.push(array.results[indexOfMovie]);
    //     localStorage.setItem(refsStorage.STORAGE_KEY_QUEUE, JSON.stringify(arrayWatched));
    //   } else {
    //     localStorage.setItem(refsStorage.STORAGE_KEY_QUEUE, JSON.stringify(pushArray));
    //   }
  });
}


function addSelectedFilmsLocalStorage(e, key) {
  const pushArray = [];
  array = JSON.parse(localStorage.getItem(refsStorage.CURRENT_FILMS));
  const indexOfMovie = array.results.findIndex(movieObj => movieObj.id == e.currentTarget.dataset.id);
  // array.results[indexOfMovie];
  pushArray.push(array.results[indexOfMovie]);
  console.log(pushArray);

  arrayWatched = JSON.parse(localStorage.getItem(key));
  console.log(arrayWatched);
  if (arrayWatched) {
    arrayWatched.push(array.results[indexOfMovie]);
    localStorage.setItem(key, JSON.stringify(arrayWatched));
  } else {
    localStorage.setItem(key, JSON.stringify(pushArray));
  }
}

window.addEventListener('keydown', closeModalHandler);
backdropModal.addEventListener('click', closeBDModal);

function closeModalHandler(e) {
  if (e.code === 'Escape') {
    backdropModal.classList.add('visually-hidden');
    document.body.classList.remove('stop-scrolling');
  }
}

function closeBDModal(e) {
  if (e.target === e.currentTarget) {
    backdropModal.classList.add('visually-hidden');
    document.body.classList.remove('stop-scrolling');
  } else if (e.target.className === 'close-button') {
    backdropModal.classList.add('visually-hidden');
    document.body.classList.remove('stop-scrolling');
  } else return;
}

function checkForMovieInLocalStorage(id, key) {
  const arrayMovies = JSON.parse(localStorage.getItem(key));
  if (!arrayMovies) {
    return;
  }
  const indexOfMovie = arrayMovies.findIndex(movie => movie.id === id);
  return indexOfMovie;
}

// const pushArray = [];
// array = JSON.parse(localStorage.getItem(refsStorage.CURRENT_FILMS));
// const indexOfMovie = array.results.findIndex(movieObj => movieObj.id == e.currentTarget.dataset.id);
// console.log(array.results[indexOfMovie]);
// pushArray.push(array.results[indexOfMovie]);
// console.log(pushArray);

// arrayWatched = JSON.parse(localStorage.getItem(refsStorage.STORAGE_KEY_QUEUE));
// console.log(arrayWatched);
// if (arrayWatched) {
//   arrayWatched.push(array.results[indexOfMovie]);
//   localStorage.setItem(refsStorage.STORAGE_KEY_QUEUE, JSON.stringify(arrayWatched));
// } else {
//   localStorage.setItem(refsStorage.STORAGE_KEY_QUEUE, JSON.stringify(pushArray));
// }