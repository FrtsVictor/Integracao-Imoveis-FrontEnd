import React, { useEffect, useState, useCallback } from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

// import ButtonPOST from '../../components/BtnTestesApi/BtnPOST';
// import ButtonGET from '../../components/BtnTestesApi/BtnGetAll';

import { Container, CardDiv } from './styles';

import api from '../../services/api';

const Home = () => {
  // Test api __________________________________________________
  const acessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZExvZ2luIjoiMzlmODExOWItYzA1OC04NTNjLTM3ZjMtYmUxYjE0NTMzZjA3IiwiaWRBZG1pbmlzdHJhZG9yYSI6IjRmODM1Y2JhLTdjOWMtNGI5OS1hNGYzLTAzZmNiMmI2MTQyZCIsImlkUGVzc29hIjoiMzlmODExOWItYmZjNC0yMDBlLTY3MzItOWUyMzVjZGI0M2Q0Iiwibm9tZSI6IlBhdWxvIENlc2FyIiwiZW1haWwiOiJkZW5pc2UuZHNuLmltYkBhbHRlcmRhdGEuY29tLmJyIiwicGVyZmlsIjoiQ29ycmV0b3IiLCJ1cmxJbWFnZW0iOiJodHRwczovL3dlYi1pbW1vYmlsZXdlYi5zMy5hbWF6b25hd3MuY29tL2NvcnJldGFnZW0vcHVibGljYS80ZjgzNWNiYS03YzljLTRiOTktYTRmMy0wM2ZjYjJiNjE0MmQvY29ycmV0b3I2MzczNzU5OTE2Njc2MzMyNzAucG5nIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDEyLyJ9.31Px5-gjnIzQDaEHsAmxs71rXmeijg75fOgk9jzd9UQ';

  const [apiList, setApiList] = useState([]);

  const config = {
    headers: { Authorization: `bearer ${acessToken}` },
  };

  const loadList = useCallback(
    async () => {
      try {
        const resp = await api.post('Imovel/obter-lista', {}, config);
        const test = resp.data.content.listaPaginada;
        setApiList(test);
        console.log(test);
        console.log('LoadList', apiList);
      } catch (error) {
        console.log(error);
      }
    }, [],
  );

  // _____________________________________________________________

  useEffect(() => {
    loadList();
  }, []);

  return (
    <>
      {/* <ButtonGET />
        <ButtonPOST />
      <ButtonGET /> */}
      <Header title="Home" />
      <Container>
        <Carousel />
        <CardDiv>
          { apiList.map((imovel) => (
            <div>
              {/* <Card
                imovel={{ ...imovel }}
                urlImagem={imovel.urlImagem}
              /> */}
            </div>
          ))}
        </CardDiv>
      </Container>
      <Footer />
    </>
  );
};
export default Home;
