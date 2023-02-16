import { restDataForModal, createStringOfGenres } from './data-for-modal';

import { refsStorage, refs } from './refs';

import { getTrailerPath } from './data-for-trailer';

import noPhoto from '../images/no_image.jpg';

// import createMarkupCardsFilms from './createMarkupCardsFilms';

const BASE_URL_POSTER = 'https://image.tmdb.org/t/p/w500';
const backdropModal = document.querySelector('.js-markup__modal');
const modal = document.querySelector('.js-modal-window');
modal.addEventListener('click', openModal);

function checkForMovieInLocalStorage(id, key) {
  const arrayMovies = JSON.parse(localStorage.getItem(key));

  if (!arrayMovies) {
    return -1;
  }
  const indexOfMovie = arrayMovies.findIndex(movie => movie.id == id);

  return indexOfMovie;
}

function openModal(event) {
  if (event.currentTarget == event.target) {
    return;
  }

  const objectInfoMovie = restDataForModal(event); // Беремо інформацію про фільм з локал Сторедж
  const markup = createMarkupModal(objectInfoMovie, objectInfoMovie); // Створюэмо розмітку
  backdropModal.innerHTML = markup;
  backdropModal.classList.remove('visually-hidden'); //Відображення модалки

  document.body.classList.add('stop-scrolling');
  addEventListenerToBtn();
  getTrailerPath(objectInfoMovie.id);
}

function createMarkupModal(objMovieInfo, objectInfoMovie) {
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

  const indexOfMovieInWatched = checkForMovieInLocalStorage(
    objectInfoMovie.id,
    refsStorage.STORAGE_KEY_WATCHED
  );
  const indexOfMovieInQueue = checkForMovieInLocalStorage(
    objectInfoMovie.id,
    refsStorage.STORAGE_KEY_QUEUE
  );

  const imgSource = poster_path ? BASE_URL_POSTER + poster_path : noPhoto;

  const markup = `<div class="movie-card" id="bright">
        <div class="button-wrapper">
            <div class="button-container">
                <button class="close-button" id='close-button'>Close</button>
            </div>
            <div class="button-container">
  <button
    class="watch-trailer js-watch-trailer visually-hidden"
    id="watch-trailer"
  >
    <a href="" class="js-link-tailer" target="_blank" rel="noopener noreferrer">
      Watch trailer
    </a>
  </button>
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
                    <li><button type="button" class="watch-btn ${
                      indexOfMovieInWatched == -1 ? '' : 'active'
                    } js-btn-watched" data-id="${id}">${
    indexOfMovieInWatched === -1 ? 'Add to Watched' : 'Watched Remove'
  }</button></li>
                    <li><button type="button" class="queue-btn ${
                      indexOfMovieInQueue == -1 ? '' : 'active'
                    } js-btn-queue" data-id="${id}">${
    indexOfMovieInQueue == -1 ? 'Add to Queue' : 'Queue Remove'
  }</button></li>
                </ul>

                </div>
            </div>
        </div>

    </div>`;

  return markup;
}

window.addEventListener('keydown', closeModalHandler);
backdropModal.addEventListener('click', closeBDModal);

function addEventListenerToBtn() {
  const watchBtn = document.querySelector('.js-btn-watched');
  const queueBtn = document.querySelector('.js-btn-queue');

  watchBtn.addEventListener('click', e => {
    watchBtn.classList.toggle('active');
    const index = checkForMovieInLocalStorage(
      e.currentTarget.dataset.id,
      refsStorage.STORAGE_KEY_WATCHED
    );

    if (index == -1) {
      addSelectedFilmsLocalStorage(e, refsStorage.STORAGE_KEY_WATCHED);
      watchBtn.textContent = 'Watched Remove';

      const indexOther = checkForMovieInLocalStorage(
        e.currentTarget.dataset.id,
        refsStorage.STORAGE_KEY_QUEUE
      );

      if (indexOther != -1) {
        delSelectedFilmsFromLocalStoradge(
          indexOther,
          refsStorage.STORAGE_KEY_QUEUE
        );
        queueBtn.classList.remove('active');
        queueBtn.textContent = 'ADD TO QUEUE';
      }
    } else {
      delSelectedFilmsFromLocalStoradge(index, refsStorage.STORAGE_KEY_WATCHED);
      watchBtn.textContent = 'Add to Watched';
      console.log(e.currentTarget);
    }
  });

  queueBtn.addEventListener('click', e => {
    queueBtn.classList.toggle('active');
    const index = checkForMovieInLocalStorage(
      e.currentTarget.dataset.id,
      refsStorage.STORAGE_KEY_QUEUE
    );
    if (index == -1) {
      addSelectedFilmsLocalStorage(e, refsStorage.STORAGE_KEY_QUEUE);
      e.currentTarget.textContent = 'QUEU Remove';

      const indexOther = checkForMovieInLocalStorage(
        e.currentTarget.dataset.id,
        refsStorage.STORAGE_KEY_WATCHED
      );
      if (indexOther != -1) {
        delSelectedFilmsFromLocalStoradge(
          indexOther,
          refsStorage.STORAGE_KEY_WATCHED
        );
        watchBtn.classList.remove('active');
        watchBtn.textContent = 'Add to Watched';
      }
    } else {
      delSelectedFilmsFromLocalStoradge(index, refsStorage.STORAGE_KEY_QUEUE);
      e.currentTarget.textContent = 'ADD TO QUEUE';
    }
  });
  //   const activeBtn = document.querySelector('.header-btn-active');
  //   const checkButton = activeBtn.textContent === 'QUEUE';
  //   if (checkButton) {
  //     if (refs.mustToRedraw) {
  //       const anMovie = JSON.parse(
  //         localStorage.getItem(refsStorage.STORAGE_KEY_QUEUE)
  //       );

  //       const objCurFilms = JSON.parse(
  //         localStorage.getItem(refsStorage.CURRENT_FILMS)
  //       );
  //       objCurFilms.results = anMovie;
  //       localStorage.setItem(
  //         refsStorage.CURRENT_FILMS,
  //         JSON.stringify(objCurFilms)
  //       );
  //     }
  //   } else if (refs.mustToRedraw) {
  //     const anMovie = JSON.parse(
  //       localStorage.getItem(refsStorage.STORAGE_KEY_WATCHED)
  //     );

  //     const objCurFilms = JSON.parse(
  //       localStorage.getItem(refsStorage.CURRENT_FILMS)
  //     );
  //     objCurFilms.results = anMovie;
  //     localStorage.setItem(
  //       refsStorage.CURRENT_FILMS,
  //       JSON.stringify(objCurFilms)
  //     );
  //   }
  // });

  //     const activeBtn = document.querySelector('.header-btn-active');
  //     const checkButton = activeBtn.textContent === 'WATCHED';

  //     if (checkButton) {
  //       if (refs.mustToRedraw) {
  //         const anMovie = JSON.parse(
  //           localStorage.getItem(refsStorage.STORAGE_KEY_WATCHED)
  //         );

  //         const objCurFilms = JSON.parse(
  //           localStorage.getItem(refsStorage.CURRENT_FILMS)
  //         );
  //         objCurFilms.results = anMovie;
  //         localStorage.setItem(
  //           refsStorage.CURRENT_FILMS,
  //           JSON.stringify(objCurFilms)
  //         );
  //       }
  //     } else if (refs.mustToRedraw) {
  //       const anMovie = JSON.parse(
  //         localStorage.getItem(refsStorage.STORAGE_KEY_QUEUE)
  //       );

  //       const objCurFilms = JSON.parse(
  //         localStorage.getItem(refsStorage.CURRENT_FILMS)
  //       );
  //       objCurFilms.results = anMovie;
  //       localStorage.setItem(
  //         refsStorage.CURRENT_FILMS,
  //         JSON.stringify(objCurFilms)
  //       );
  //     }
  //   });
  // }
}
function addSelectedFilmsLocalStorage(e, key) {
  const pushArray = [];
  const array = JSON.parse(localStorage.getItem(refsStorage.CURRENT_FILMS));
  const indexOfMovie = array.results.findIndex(
    movieObj => movieObj.id == e.currentTarget.dataset.id
  );
  pushArray.push(array.results[indexOfMovie]);

  const arrayWatched = JSON.parse(localStorage.getItem(key));
  if (arrayWatched) {
    arrayWatched.push(array.results[indexOfMovie]);
    localStorage.setItem(key, JSON.stringify(arrayWatched));
  } else {
    localStorage.setItem(key, JSON.stringify(pushArray));
  }
}

function delSelectedFilmsFromLocalStoradge(index, key) {
  const array = JSON.parse(localStorage.getItem(key));
  array.splice(index, 1);
  const arrayJSON = JSON.stringify(array);
  localStorage.setItem(key, arrayJSON);
}



function closeModalHandler(e) {
  if (e.code === 'Escape') {
    backdropModal.classList.add('visually-hidden');
    document.body.classList.remove('stop-scrolling');
  }
  // if (refs.mustToRedraw) {
  //   const div = document.querySelector('.list-films');
  //   const curMov = JSON.parse(
  //     localStorage.getItem(refsStorage.CURRENT_FILMS)
  //   ).results;
  //   let markup = createMarkupCardsFilms(curMov);
  //   div.innerHTML = markup;
  // }
}

function closeBDModal(e) {
  if (e.target === e.currentTarget) {
    backdropModal.classList.add('visually-hidden');
    document.body.classList.remove('stop-scrolling');

    // if (refs.mustToRedraw) {
    //   const div = document.querySelector('.list-films');
    //   const curMov = JSON.parse(
    //     localStorage.getItem(refsStorage.CURRENT_FILMS)
    //   ).results;
    //   let markup = createMarkupCardsFilms(curMov);
    //   div.innerHTML = markup;
    // }
  } else if (e.target.className === 'close-button') {
    backdropModal.classList.add('visually-hidden');
    document.body.classList.remove('stop-scrolling');

    // if (refs.mustToRedraw) {
    //   const div = document.querySelector('.list-films');
    //   const curMov = JSON.parse(
    //     localStorage.getItem(refsStorage.CURRENT_FILMS)
    //   ).results;
    //   let markup = createMarkupCardsFilms(curMov);
    //   div.innerHTML = markup;
    // }
  } else return;
}
