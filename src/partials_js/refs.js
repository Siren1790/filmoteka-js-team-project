const refs = {
    preloader: document.querySelector('#preloader'),

}

const refsApi = {
    API_KEY: 'fed7db976d902fcdece547680e82ff9e',
    API_URL_TRENDING_MOVIE: 'https://api.themoviedb.org/3/trending/movie/day',
    API_URL_SEARCH_MOVIE: 'https://api.themoviedb.org/3/search/movie',
    API_URL_MOVIE_DETAILS: 'https://api.themoviedb.org/3/movie/',
    API_URL_MOVIE_GENRES: 'https://api.themoviedb.org/3/genre/movie/list',

}

export { refs, refsApi }