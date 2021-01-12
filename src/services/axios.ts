import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: process.env.MOVIE_API_KEY,
    language: 'en-US'
  }
});

export default instance;
