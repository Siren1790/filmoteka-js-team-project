import axios from "axios";

const API_KEY = 'fed7db976d902fcdece547680e82ff9e';
const API_URL_TRENDING_MOVIE = 'https://api.themoviedb.org/3/trending/movie/day';
const API_URL_SEARCH_MOVIE = 'https://api.themoviedb.org/3/search/movie';


// * По документации
// const API_URL_MOVIE_DETAILS = 'https://api.themoviedb.org/3/movie/{movie_id}';

// /movie/{movie_id} - integer
// {movie_id}, я так поняла, тянуть с localStorage (когда первые 20 загрузились)

const API_URL_MOVIE_DETAILS = `https://api.themoviedb.org/3/movie/
536554`;//так находит

// * По документации Та же проблема
const API_URL_MOVIE_VIDEO = 'https://api.themoviedb.org/3/movie/{movie_id}/videos';


class Movie {
  constructor({ searchValue }) {
    this.searchValue = searchValue;
    this.currentPage = 1;

    // поиск по ключевому слову
    this.currentQuery = 'cat';
  }

  async fetchTrendingMovies() {
    try {
      const response = await axios.get(API_URL_TRENDING_MOVIE, {
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

  async fetchSearchMovies() {
    try {
      const response = await axios.get(API_URL_SEARCH_MOVIE, {
        params: {
          api_key: API_KEY,
          query: this.currentQuery,
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

  async fetchMovieDetails() {
    try {
      // * попытка
      // const response = await axios.get(`API_URL_MOVIE_DETAILS({ results }).map(({ id }) => id), {
      //   params: {
      //     api_key: API_KEY,
      //     language: 'en-US',
      //   }
      // }`)
      const response = await axios.get(API_URL_MOVIE_DETAILS, {
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

  async fetchMovieVideo() {
    try {
      const response = await axios.get(API_URL_MOVIE_VIDEO, {
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

  nextPage() {
    this.currentPage += 1;
  }

  resetPage() {
    this.currentPage = 1;
  }
}

export { Movie };

