import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/',
});

const ApiImoveis = {

  get: async (page = 0) => {
    try {
      const response = await api.get(`api/imoveis?page=${page}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  post: async (imovel) => {
    try {
      const response = await api.post('api/imoveis', {
        ...imovel,
      });
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

};

export default ApiImoveis;
