import axios from 'axios';
import swal from 'sweetalert';

const api = axios.create({
  baseURL: 'http://localhost:8080/',
});

const ApiImoveis = {
  getAll: async (page = 0) => {
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
  getByUserId: async (userId) => {
    try {
      const response = await api.get(`api/imoveis/users/${userId}`);
      return response.data;
    } catch (error) {
      return console.log(error);
    }
  },

  user: {
    login: async (username, password) => {
      try {
        const response = await api.post('/login', {
          username, password,
        });
        console.log('login', response);
        swal('LoggedIn!', 'Bem vindo ao nosso sistema!', 'sucess');
        return response;
      } catch (error) {
        if (error.response.status === 401) { swal('Ops!', 'username ou senha invalidos', 'error'); }
        console.log(error);
        return null;
      }
    },

    getByUserName: async (username, token) => {
      try {
        const response = await api.get(`/api/username/${username}`);
        console.log('login', response);
        return { ...response.data, token };
      } catch (error) {
        if (error.response.status === 404) { swal('Ops!', 'username invalido', 'error'); }
        return console.log(error);
      }
    },

    addImovel: async (userId) => {
      try {
        const response = await api.post(`/api/imoveis/users/${userId}`);
        return response;
      } catch (error) {
        return console.log(error);
      }
    },

    removeImovel: async (imovelId) => {
      try {
        const response = await api.put(`/api/imoveis/user/${imovelId}`);
        return response;
      } catch (error) {
        return console.log(error);
      }
    },
  },
};

export default ApiImoveis;
