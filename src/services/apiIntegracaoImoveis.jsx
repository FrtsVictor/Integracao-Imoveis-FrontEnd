import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/',
});

const ApiImoveis = {

  get: async () => {
    try {
      const response = await api.get('api/imoveis?sort=cidade,asc');
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
