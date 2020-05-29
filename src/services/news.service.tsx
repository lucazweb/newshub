import axios from 'axios';

// NewsAPI key
const apiKey = 'e12cd7e7ac9f41099f90cac230307feb';

const api = axios.create({
  baseURL: 'http://newsapi.org/v2',
  timeout: 2000,
});

api.interceptors.request.use((config) => {
  config.params = config.params || {};
  config.params['apiKey'] = apiKey;
  return config;
});

export default api;
