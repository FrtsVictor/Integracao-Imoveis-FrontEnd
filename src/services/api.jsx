import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api-mobile-corretagem-homologacao.alterdatasoftware.com.br/api',
});

export default api;
