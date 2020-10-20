import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/',
});

const ApiImoveis = {

  get: async () => (
    api.get('api/imoveis')
      .then((resp) => resp.data).catch((err) => console.log(err))
  ),

  post: async (imovel) => (
    api.post('api/imoveis', {
      ...imovel,
    })
      .then((resp) => resp.data)
      .catch((error) => console.log(error.response.data))
  ),
};

export default ApiImoveis;
