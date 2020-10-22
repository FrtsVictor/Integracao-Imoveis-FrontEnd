import React, { useState, useEffect, useCallback } from 'react';
import Header from '../../components/Header';
import apiIntegracao from '../../services/apiIntegracaoImoveis';
import Footer from '../../components/Footerrrrr';

import FavoriteCard from '../../components/FavoriteCard';

import {
  Container, CardContainer, Filter, CardDiv,
} from './styles';

const Favoritos = () => {
  const [favorite, setFavorite] = useState([]);

  const getAll = useCallback(() => {
    apiIntegracao.get()
      .then((resp) => {
        console.log('pageabel', resp.pageable);
        console.log('content', resp.content);
        setFavorite(resp.content);
      });
  }, []);

  useEffect(() => {
    getAll();
  }, []);

  return (
    <>
      <Header title="Favoritos" />
      <Container>
        <Filter />
        <CardContainer>
          {favorite.map((imovel) => (
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
