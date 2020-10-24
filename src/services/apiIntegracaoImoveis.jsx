import axios from 'axios';
import swal from 'sweetalert';

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
      swal('Sucesso', 'Imovel salvo com sucesso!', 'success');
      return response.data;
    } catch (error) {
      if (error.response.status === 409) {
        swal('Ops!', 'Você ja favoritou este imovel', 'error');
        console.log(error);
      }
      return console.log(error.response.status);
    }
  },

  user: {
    login: async (username, password) => {
      try {
        const response = await api.post('/login', {
          username, password,
        });
        console.log('login', response);
        return response;
      } catch (error) {
        return console.log(error);
      }
    },
    getByUserName: async (username, token) => {
      try {
        const response = await api.get(`/api/username/${username}`);
        console.log('login', response);
        return { ...response.data, token };
      } catch (error) {
        return console.log(error);
      }
    },
    // addImovel: async () => {
    //   try {

    //   } catch (error) {

    //   }
    // },
  },
};

export default ApiImoveis;
