import axios from "axios";
import spinner from "./spinner";

const API_KEY = 'fed7db976d902fcdece547680e82ff9e';
const API_URL_TRENDING_MOVIE = 'https://api.themoviedb.org/3/trending/movie/day';
const API_URL_SEARCH_MOVIE = 'https://api.themoviedb.org/3/search/movie';
const API_URL_MOVIE_DETAILS = 'https://api.themoviedb.org/3/movie/';

class Movie {
  constructor({ searchValue }) {
    this.searchValue = searchValue;
    this.currentPage = 1;
  }

  /**
   *
   * @returns a list of popular movies for today
   */
  async fetchTrendingMovies() {
    try {
      const response = await axios.get(API_URL_TRENDING_MOVIE, {
        params: {
          api_key: API_KEY,
          page: this.currentPage,
        }
      });

      console.log(response.data);
      console.log('Total Pages:', response.data.total_pages);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   *
   * @returns a list of movies by keyword
   */
  async fetchSearchMovies() {
    spinner();
    try {
      const response = await axios.get(API_URL_SEARCH_MOVIE, {
        params: {
          api_key: API_KEY,
          query: 'cat', //change on 'this.searchValue'
          language: 'en-US',
          page: this.currentPage,
          include_adult: 'false,'
        }
      });

      console.log(response.data);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  /**
     * @param {API_URL_MOVIE_DETAILS} id
     * @returns full information about the movie
     */
  async fetchMovieDetails(id = `39860`) {
    try {
      const response = await axios.get(`${API_URL_MOVIE_DETAILS}${id}`, {
        params: {
          api_key: API_KEY,
          language: 'en-US',
        }
      })

      console.log(response.data);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  /**
   *
   * @param {*} id
   * @returns full information about a possible trailer
   */
  async fetchMovieVideo(id = `39860`) {
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}/videos`, {
        params: {
          api_key: API_KEY,
        }
      })

      console.log(response.data);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  nextPage() {
    this.currentPage += 1;
  }

  resetPage() {
    this.currentPage = 1;
  }
}

export { Movie };
