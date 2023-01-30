import axios from 'axios';
import { refsApi } from './refs';


class Movie {
  constructor({ searchValue }) {
    this.searchValue = searchValue;
    this.currentPage = 1;
    this.isFirstPageActive = true;
    this.isLastPageActive = false;
  }

  init(){
    return this.fetchTrendingMovies();
  }

  setIsFirstPageActive(value){
    this.isFirstPageActive = value
  }

  setIsLastPageActive(value){
    this.isLastPageActive = value
  }

  setCurrentPage(value){
    this.currentPage = value;
  }

  /**
   *
   * @returns a list of popular movies for today
   */
  async fetchTrendingMovies(pageIndex = 1) {
    this.setCurrentPage(pageIndex);

    try {
      const response = await axios.get(refsApi.API_URL_TRENDING_MOVIE, {
        params: {
          api_key: refsApi.API_KEY,
          page: pageIndex,
        },
      });

      const { data } = response;

      this.setIsFirstPageActive([1,2,3].includes(pageIndex))
      this.setIsLastPageActive([data.total_pages - 1, data.total_pages - 2, data.total_pages - 3].includes(pageIndex))

      return data;
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
      const response = await axios.get(refsApi.API_URL_SEARCH_MOVIE, {
        params: {
          api_key: refsApi.API_KEY,
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
      const response = await axios.get(`${refsApi.API_URL_MOVIE_DETAILS}${id}`, {
        params: {
          api_key: refsApi.API_KEY,
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
            api_key: refsApi.API_KEY,
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
          const response = await axios.get(refsApi.API_URL_MOVIE_GENRES, {
              params: {
                  api_key: refsApi.API_KEY,
              }
          });

        console.log(response.data);
        return response.data;
      } catch (error) {
        console.error(error);
      }
    }
 nextPage() {
    console.log('nextPage')
    this.setCurrentPage(this.currentPage += 1);
  }

  resetPage() {
    console.log('resetPage')
    this.setCurrentPage(1);
  }
}

const movie = new Movie({
  searchValue: '',
});

export { Movie, movie };