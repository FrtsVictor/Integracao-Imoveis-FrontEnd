import React, { useState, useEffect, useCallback } from 'react';
import Header from '../../components/Header';
import { apiIntegracaoImvs } from '../../services/apiIntegracaoImoveis';
import Footer from '../../components/Footer';
import Pagination from '../../components/Pagination';
import { useUser } from '../../components/core/UserProvider/useUser';

import FavoriteCard from '../../components/FavoriteCard';

import {
  Container, CardContainer, Filter, CardDiv, PageDiv,
} from './styles';

const Favoritos = () => {
  const { user: { id } } = useUser();
  const [pageable, setPageable] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [atualPage, setAtualPage] = useState(0);
  const [update, setUpdate] = useState();

  const updateScreen = (screen) => setUpdate(screen);
  const getPages = (pages) => setAtualPage(pages);

  const getPaginationRequest = useCallback(() => {
    apiIntegracaoImvs.user.getPageableFavs(atualPage, id)
      .then(({ data }) => {
        const pagination = {
          firstPage: data.first,
          lastPage: data.last,
          atualPage: data.number,
          totalPages: data.totalPages,
          totalElements: data.totalElements,
        };
        setPageable(pagination);
        setItemList(data.content);
      });
  }, [pageable, atualPage]);

  useEffect(() => {
    getPaginationRequest();
  }, [atualPage, update]);

  return (
    <>
      <Header title="Favoritos" />

      <PageDiv>
        <Pagination getPages={getPages} pageable={pageable} />
      </PageDiv>

      <Container>
        <Filter />
        <CardContainer>
          {itemList.map((imovel) => (
            <CardDiv>
              <FavoriteCard imovel={imovel} updateScreen={updateScreen} update={update} />
            </CardDiv>
          ))}
        </CardContainer>
      </Container>
      <Footer />
    </>
  );
};

export default Favoritos;
