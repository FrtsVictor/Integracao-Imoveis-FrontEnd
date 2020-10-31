import React, { useEffect, useState, useCallback } from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

//import ButtonPOST from '../../components/BtnTestesApi/BtnPOST';
import Pagination from '../../components/PaginationHome';

import { Container, CardDiv } from './styles';
import { apiImobile } from '../../services/apiImobile';

const Home = () => {
  const [pageable, setPageable] = useState({
    paginacao: {
      itensPorPagina: 4,
      paginaAtual: 0,
      totalPaginas: 0,
    },
  });

  const [itemList, setItemList] = useState([]);
  const [atualPage, setAtualPage] = useState(1);

  const getPages = (pages) => setAtualPage(pages);

  const getPaginationRequest = useCallback(() => {
    apiImobile.getImoveis(pageable)
      .then(({ data: { content } }) => {
        const pagination = {
          paginacao: {
            itensPorPagina: 4,
            paginaAtual: atualPage,
            totalPaginas: Math.ceil(content.totalItens / 4) || 0,
          },
        };
        setPageable(pagination);
        setItemList(content.listaPaginada);
      });
  }, [pageable, atualPage]);

  useEffect(() => {
    getPaginationRequest();
  }, [atualPage]);

  return (
    <>
      {/* <ButtonPOST /> */}
      <Header title="Home" />
      <Container>
        <Carousel />
        <Pagination pageable={pageable} getPages={getPages} />

        {itemList ? (
          <CardDiv>
            { itemList.map((imovel) => (
              <div key={imovel.id}>
                <Card
                  imovel={{ ...imovel }}
                />
              </div>
            ))}
          </CardDiv>
        ) : ''}

      </Container>
      <Footer />
    </>
  );
};
export default Home;
