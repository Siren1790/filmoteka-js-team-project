import { movie } from './api';

const YOUTUBE_ENDPOINT_TRAILER = 'https://www.youtube.com/watch?v=';

async function getTrailerPath(id) {
  const fetchDataAboutMovie = await movie.fetchMovieVideo(id);
  if (!fetchDataAboutMovie.results.length) return;

  const openTrailerBtn = document.querySelector('.js-watch-trailer');
  const openTrailerLink = document.querySelector('.js-link-tailer');

  const partOfPathTrailer = fetchDataAboutMovie.results[0].key;
  const fullPathTrailer = YOUTUBE_ENDPOINT_TRAILER + partOfPathTrailer;
  openTrailerBtn.classList.remove('visually-hidden');
  openTrailerLink.setAttribute('href', fullPathTrailer);
}

export { getTrailerPath };
