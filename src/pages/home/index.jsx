import React, { useEffect, useState } from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Carousel from '../../components/Carousel';

import { Container } from './styles';

import api from '../../services/api';

const Home = () => {
  // Test api __________________________________________________
  const acessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZExvZ2luIjoiMzlmODExOWItYzA1OC04NTNjLTM3ZjMtYmUxYjE0NTMzZjA3IiwiaWRBZG1pbmlzdHJhZG9yYSI6IjRmODM1Y2JhLTdjOWMtNGI5OS1hNGYzLTAzZmNiMmI2MTQyZCIsImlkUGVzc29hIjoiMzlmODExOWItYmZjNC0yMDBlLTY3MzItOWUyMzVjZGI0M2Q0Iiwibm9tZSI6IlBhdWxvIENlc2FyIiwiZW1haWwiOiJkZW5pc2UuZHNuLmltYkBhbHRlcmRhdGEuY29tLmJyIiwicGVyZmlsIjoiQ29ycmV0b3IiLCJ1cmxJbWFnZW0iOiJodHRwczovL3dlYi1pbW1vYmlsZXdlYi5zMy5hbWF6b25hd3MuY29tL2NvcnJldGFnZW0vcHVibGljYS80ZjgzNWNiYS03YzljLTRiOTktYTRmMy0wM2ZjYjJiNjE0MmQvY29ycmV0b3I2MzczNzU5OTE2Njc2MzMyNzAucG5nIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDEyLyJ9.31Px5-gjnIzQDaEHsAmxs71rXmeijg75fOgk9jzd9UQ';

  const [apiList, setApiList] = useState([]);

  const config = {
    headers: { Authorization: `bearer ${acessToken}` },
  };

  const loadList = async () => {
    try {
      const resp = await api.post('Imovel/obter-lista', {}, config);
      const test = resp.data.content.listaPaginada;
      setApiList(test);
      console.log(test);
      console.log('esse', apiList);
    } catch (error) {
      console.log(error);
    }
  };

  // _____________________________________________________________

  useEffect(() => {
    loadList();
  }, []);

  return (
    <>
      <Header title="Home" />
      <Carousel />
      <Container>

        {
        apiList.map((imovel) => (
          <Card
            titulo={imovel.titulo}
            valor={imovel.valor}
            bairro={imovel.bairro}
            tipo={imovel.tipo}
            cidade={imovel.cidade}
            dormitorios={imovel.dormitorios}
            banheiros={imovel.banheiros}
            transacao={imovel.transacao}
            destaque={imovel.destaque}
            urlImagem={imovel.urlImagem}
          />
        ))
        }

      </Container>
    </>
  );
};
export default Home;
