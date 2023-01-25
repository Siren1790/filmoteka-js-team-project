import { Movie } from './api';
import { markup } from './markup_service';

const movie = new Movie({
  // searchValue: '',
});

console.log(movie.fetchSearchMovies());