import axios from 'axios';

const theMovieDBAPIClient = axios.create({
  baseURL: process.env.REACT_APP_MOVIEDB_API_URL,
  params: {
    language: 'pt-BR',
    api_key: process.env.REACT_APP_MOVIEDB_API_CHAVE
  }
});

export default theMovieDBAPIClient;
