import { restDataForModal, createStringOfGenres } from './data-for-modal';
import { markUpGenresInModal } from './createMarkupCardsFilms';

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
    poster_path,
    title,
    original_title,
    vote_average,
    vote_count,
    popularity,
    genre_ids,
    overview,
  } = objMovieInfo;

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
    
            <div class="#">
                <img class="card-main-poster"
                    src="${BASE_URL_POSTER}${poster_path}" />
            </div>
    
            <div class="info-section">
                <div class="title-wrapper">
                    <h1 class="card-movie-title">${title}</h1>
                </div>
    
                <table class="card-movie-info">
                    <tr class="row">
                        <td class="row-title">Vote / Votes</td>
                        <td class="row-value"><span class="votes">${vote_average}</span> / ${vote_count}</td>
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
                    <li><button type="button" class="watch-btn js-btn-watched">Add to Watched</button></li>
                    <li><button type="button" class="queue-btn js-btn-queue">Add to Queue</button></li>
                </ul>
    
                </div>
            </div>
        </div>
    
    </div>`;

  return markup;
}

function addEventListenerToBtn() {
  const watchBtn = modal.querySelector('.watch-btn');
  const queueBtn = modal.querySelector('.queue-btn');
  // watchBtn.addEventListener('click', saveLocalStorageToWatched);
  // queueBtn.addEventListener('click', saveLocalStorageToQueue);
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
