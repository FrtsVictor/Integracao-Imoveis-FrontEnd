import axios from 'axios';
import swal from 'sweetalert';
import { LOCAL_STORAGE_KEYS } from '../constants';

const api = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: { Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEYS.userAuthRoken)}` },
});

const ApiImoveis = {
  getAll: async (page = 0) => {
    try {
      const { data } = await api.get(`api/imoveis/users?page=${page}`);
      return data;
    } catch (error) {
      return console.log(error);
    }
  },

  post: async (imovel) => {
    try {
      const { data } = await api.post('api/imoveis', {
        ...imovel,
      });
      swal('Sucesso', 'Imovel salvo com sucesso!', 'success');
      return data;
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
      const { data } = await api.get(`api/imoveis/users/${userId}`);
      return data;
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
