import axios from 'axios';
import { refs, refsApi } from './refs';

class Movie {
  constructor() {
    this.searchValue = '';
    this.currentPage = 1;
    this.totalpages;
    this.firstRequest = true;
  }

  setSearchValue(value) {
    this.searchValue = value;
  }
  getSearchValue() {
    return this.searchValue;
  }

  setCurrentPage(value) {
    this.currentPage = value;
  }
  getCurrentPage() {
    return this.currentPage;
  }
  setTotalPages(value) {
    this.totalpages = value;
  }
  getTotalPages() {
    return this.totalpages;
  }

  nextPage() {
    this.setCurrentPage((this.currentPage += 1));
  }

  resetPage() {
    this.currentPage = 1;
  }

  /**
   *
   * @returns a list of popular movies for today
   */
  async fetchTrendingMovies() {
    refs.mustToRedraw = 0;
    try {
      const response = await axios.get(refsApi.API_URL_TRENDING_MOVIE, {
        params: {
          api_key: refsApi.API_KEY,
          page: this.currentPage,
        },
      });
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
    refs.mustToRedraw = true;

    try {
      const response = await axios.get(refsApi.API_URL_SEARCH_MOVIE, {
        params: {
          api_key: refsApi.API_KEY,
          query: this.searchValue,
          language: 'en-US',
          page: this.currentPage,
          include_adult: 'false,',
        },
      });

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
  async fetchMovieDetails(id = `3986`) {
    try {
      const response = await axios.get(
        `${refsApi.API_URL_MOVIE_DETAILS}${id}`,
        {
          params: {
            api_key: refsApi.API_KEY,
            language: 'en-US',
          },
        }
      );
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
            api_key: refsApi.API_KEY,
          },
        }
      );

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
      const response = await axios.get(refsApi.API_URL_MOVIE_GENRES, {
        params: {
          api_key: refsApi.API_KEY,
        },
      });

      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
}

const movie = new Movie();

export { movie };
