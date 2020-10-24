import React, { useState, useEffect, useCallback } from 'react';
import Header from '../../components/Header';
import apiIntegracao from '../../services/apiIntegracaoImoveis';
import Footer from '../../components/Footerrrrr';
import Pagination from '../../components/Pagination';

import FavoriteCard from '../../components/FavoriteCard';

import {
  Container, CardContainer, Filter, CardDiv, PageDiv,
} from './styles';

const Favoritos = () => {
  const [page, setPage] = useState([]);
  const [itemList, setItemList] = useState([]);

  const [getPage, setGetPage] = useState(0);

  const getPages = (pages) => setGetPage(pages);

  const getAll = useCallback(() => {
    apiIntegracao.get(getPage)
      .then((resp) => {
        const pageable = {
          firstPage: resp.first,
          lastPage: resp.last,
          atualPage: resp.number,
          totalPages: resp.totalPages,
          totalElements: resp.totalElements,
        };

        setPage(pageable);
        setItemList(resp.content);
      });
  }, [page, getPage]);

  useEffect(() => {
    getAll();
  }, [getPage]);

  return (
    <>
      <Header title="Favoritos" />

      <PageDiv>
        <Pagination getPages={getPages} pageable={page} />
      </PageDiv>

      <Container>
        <Filter />
        <CardContainer>
          {itemList.map((imovel) => (
            <CardDiv>
              <FavoriteCard imovel={imovel} />
            </CardDiv>
          ))}
        </CardContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Favoritos;
