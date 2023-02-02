const refs = {
  //spiner.js
  preloader: document.querySelector('#preloader'),
  mainMarkFilms: document.querySelector('.list-films'),
  //pagination.js
  paginationWrapperNode: document.querySelector('.render-pagination-list'),
  prevPaginationNode: document.querySelector('.btn-arrow-prev'),
  nextPaginationNode: document.querySelector('.btn-arrow-next'),
  listPaginationNode: document.querySelector('.list-pagination'),

  //serch.js
  markSearchFilms: document.querySelector('.list-films'),
  searchButton: document.querySelector('.js-search-form'),
  searchBadResult: document.querySelector('.js-search-badResult'),
  
  //local_storage.js
  btnToWatched: document.querySelector('.js-btn-watched'),
  btnToQueue: document.querySelector('.js-btn-queue'),
  //to-top.js
  scrollToTopButton: document.getElementById('js-top'),
};

const refsApi = {
  API_KEY: 'fed7db976d902fcdece547680e82ff9e',
  API_URL_TRENDING_MOVIE: 'https://api.themoviedb.org/3/trending/movie/day',
  API_URL_SEARCH_MOVIE: 'https://api.themoviedb.org/3/search/movie',
  API_URL_MOVIE_DETAILS: 'https://api.themoviedb.org/3/movie/',
  API_URL_MOVIE_GENRES: 'https://api.themoviedb.org/3/genre/movie/list',
};

const refsStorage = {
  CURRENT_FILMS: 'currentFilms',
  STORAGE_KEY_WATCHED: 'addToWatched',
  STORAGE_KEY_QUEUE: 'addToQueue',
};

export { refs, refsApi, refsStorage };
