import axios from 'axios';

const API_KEY = '3a06a0c445c872d937336c6868e947a8';

const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: API_KEY,
    language: 'en-US'
  }
});

export default instance;
