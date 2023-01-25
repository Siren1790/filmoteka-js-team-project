import { Movie } from './services/api';

const movie = new Movie({
  // searchValue: '',
});

movie.fetchTrendingMovies();
movie.fetchSearchMovies();
movie.fetchMovieDetails();
movie.fetchMovieVideo();