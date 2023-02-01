import { movie } from './api';

// const trailerContainer = document.querySelector('trailer-div');

const YOUTUBE_ENDPOINT_TRAILER = 'https://www.youtube.com/watch?v=';

async function getTrailerPath(id) {
  const fetchDataAboutMovie = await movie.fetchMovieVideo(id);
  if (!fetchDataAboutMovie.results.length) return;

  const openTrailerBtn = document.querySelector('.js-watch-trailer');
  const openTrailerLink = document.querySelector('.js-link-tailer');

  const partOfPathTrailer = fetchDataAboutMovie.results[0].key;
  const fullPathTrailer = YOUTUBE_ENDPOINT_TRAILER + partOfPathTrailer;
  openTrailerBtn.classList.remove('visually-hidden');
  console.dir(openTrailerBtn);
  openTrailerLink.setAttribute('href', fullPathTrailer);

  // openTrailerBtn.addEventListener('click', markUpTrailer);
  //   markUpTrailer(fullPathTrailer);
  // and create a button for the trailer
}

export { getTrailerPath };

// function markUpTrailer(trailerPath) {
//   const iframeRow = `
//     <iframe
//       class="modal-trailer"
//          src="${trailerPath}"
//       width="640"
//       height="360"
//       frameborder="0"
//       allowfullscreen
//       allow="autoplay; encrypted-media"
//     ></iframe>`;

//   trailerContainer.insertAdjacentHTML('beforeend', iframeRow);
// }

// function () {
//   openTrailerBtn.addEventListener("click", onClickViewTrailer)
// }

// 1. fetch trailer
// 2. if trailer true - add button and add eventListener
