import { Movie } from './partials_js/api';
import { Genres } from './partials_js/genres';

const movie = new Movie({
  // searchValue: '',
});

movie.fetchTrendingMovies();
movie.fetchSearchMovies();
movie.fetchMovieDetails();
movie.fetchMovieVideo();
movie.fetchMovieVideo();
movie.fetchMovieGenres();