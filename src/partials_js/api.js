import axios from 'axios';

const API_KEY = 'fed7db976d902fcdece547680e82ff9e';
const API_URL_TRENDING_MOVIE =
  'https://api.themoviedb.org/3/trending/movie/day';
const API_URL_SEARCH_MOVIE = 'https://api.themoviedb.org/3/search/movie';
const API_URL_MOVIE_DETAILS = 'https://api.themoviedb.org/3/movie/';
const API_URL_MOVIE_GENRES = 'https://api.themoviedb.org/3/genre/movie/list';

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
        },
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
    try {
      const response = await axios.get(API_URL_SEARCH_MOVIE, {
        params: {
          api_key: API_KEY,
          query: this.searchValue,
          language: 'en-US',
          page: this.currentPage,
          include_adult: 'false,',
        },
      });

      console.log(response.data);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  /**
     * @param {String} API_URL_MOVIE_DETAILS
     * @param {String} id
     * @returns full information about the movie
     */
  async fetchMovieDetails(id = `39860`) {
    try {
      const response = await axios.get(`${API_URL_MOVIE_DETAILS}${id}`, {
        params: {
          api_key: API_KEY,
          language: 'en-US',
        },
      });

      console.log(response.data);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
  /**
   *
   * @param {String} id
   * @returns full information about a possible trailer
   */
  async fetchMovieVideo(id = `39860`) {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/videos`,
        {
          params: {
            api_key: API_KEY,
          },
        }
      );

      console.log(response.data);

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }

  /**
   * 
   * @returns an array of objects with decrypted genre ids
   */
async fetchMovieGenres() {
    try {
        const response = await axios.get(API_URL_MOVIE_GENRES, {
            params: {
                api_key: API_KEY,
            }
        });

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
