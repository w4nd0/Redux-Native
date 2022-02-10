import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cold-panther-39.loca.lt/',
});

export default api;
