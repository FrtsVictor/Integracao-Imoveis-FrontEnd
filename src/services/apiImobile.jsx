import api from './api';

const apiImobile = {

  getAll:
      async () => {
        api.get('Imovel/obter-lista')
          .then((resp) => resp.data)
          .catch((error) => console.log(error));
      },

};

export default apiImobile;
