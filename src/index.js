import { Movie } from './partials_js/api';

const movie = new Movie({
  // searchValue: '',
});

movie.fetchTrendingMovies();
movie.fetchSearchMovies();
movie.fetchMovieDetails();
movie.fetchMovieVideo();