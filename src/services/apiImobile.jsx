import axios from 'axios';
import swal from 'sweetalert';
import { LOCAL_USER_IMOBILE, LOCAL_STORAGE_KEYS } from '../constants';

const api = axios.create({
  baseURL: 'http://api-mobile-corretagem-homologacao.alterdatasoftware.com.br/api',
});

const apiAuth = axios.create({
  baseURL: 'http://api-mobile-corretagem-homologacao.alterdatasoftware.com.br/api',
  headers: { Authorization: `Bearer ${localStorage.getItem(LOCAL_STORAGE_KEYS.userImobileToken)}` },
});

export const apiImobile = {

  getToken: async () => {
    try {
      const { data: { token } } = await api.post('/Autenticacao/login', { ...LOCAL_USER_IMOBILE });
      localStorage.setItem(LOCAL_STORAGE_KEYS.userImobileToken, token);
      return token;
    } catch (error) {
      swal('Ops!', 'Tivemos problema ao acessar seu Token', 'error');
      return console.log(error);
    }
  },

  getImoveis: async (pageable) => {
    try {
    //   Loading(loadSettings);
      const resp = await apiAuth.post('Imovel/obter-lista', { ...pageable });
      const test = resp.data.content.listaPaginada;
      console.log(test);
      //   Loading(loadSettings);
      return resp;
    } catch (error) {
      swal('Ops!', 'Precisamos do seu Login para acessar os imoveis!', 'error');
      console.log(error);
      const fakeResponse = {
        data: { content: {} },
      };
      return fakeResponse;
    }
  },

};
