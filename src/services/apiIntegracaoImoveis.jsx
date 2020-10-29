import axios from 'axios';
import swal from 'sweetalert';
import { Loading } from 'react-loading-ui';
import { LOCAL_STORAGE_KEYS } from '../constants';
import { loadSettings } from '../components/LoadinSpinner';

export const api = axios.create({
  baseURL: 'http://localhost:8080/',
  headers: { Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEYS.userAuthToken)}` },
});

export const apiIntegracaoImvs = {
  getAll: async (page = 0) => {
    try {
      Loading(loadSettings);
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
      Loading(loadSettings);
      const { data } = await api.get(`api/imoveis/users/${userId}`);
      Loading(loadSettings);
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

    signUp: async (newUser) => {
      try {
        const response = await api.post('api/sign-up', {
          ...newUser,
        });
        swal('Sucesso!', 'Sua conta foi cadastrada com sucesso!', 'sucess');
        return response.data;
      } catch (error) {
        if (error.response.status === 400) {
          const errorMesage = error.response.data.campos[0];
          console.log(errorMesage);
          const { nome } = errorMesage;
          const { mensagem } = errorMesage;
          return swal('Ops!', `Desculpe, todos campos sao obrigatorios \n \n Erro: ${nome} ${mensagem} `, 'error');
        }

        if (error.response.status === 409) {
          return swal('Ops!', 'Desculpe usuario ou email ja cadastrado', 'error');
        }
        return (error.response);
      }
    },

    getByUserName: async (username, token) => {
      try {
        Loading(loadSettings);
        const response = await api.get(`/api/username/${username}`);
        Loading(loadSettings);
        return { ...response.data, token };
      } catch (error) {
        if (error.response.status === 404) { swal('Ops!', 'username invalido', 'error'); }

        return console.log(error);
      }
    },

    addImovel: async (userId, imovel) => {
      try {
        const response = await api.post(`/api/imoveis/user/${userId}`, { ...imovel });
        swal('Liked!', 'Imovel salvo na pagina de favoritos!', 'sucess');
        return response;
      } catch (error) {
        if (error.response.status === 409) {
          swal('Ops!', 'Você ja favoritou este imovel', 'error');
          console.log(error);
        }
        return console.log(error.response);
      }
    },

    removeImovel: async (userId, imovelId) => {
      try {
        const response = await api.delete(`/api/imoveis/user/${userId}/remove/${imovelId}`, { crossDomain: true });
        swal('Unlike!', 'Vamos procurar mais imóveis?', 'sucess');
        return response;
      } catch (error) {
        return console.log(error);
      }
    },

    getPageableFavs: async (page = 0, userId) => {
      try {
        Loading(loadSettings);
        const response = await api.get(`/api/imoveis/user/${userId}?page=${page}`);
        console.log('Favoritos', response);
        Loading(loadSettings);
        return response;
      } catch (error) {
        return console.log(error);
      }
    },
  },
};
