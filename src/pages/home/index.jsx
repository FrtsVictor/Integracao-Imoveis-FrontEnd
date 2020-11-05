import React, { useEffect, useState, useCallback } from 'react';
// Pagination
import Pagination from '@material-ui/lab/Pagination';
// My components
import { makeStyles } from '@material-ui/core/styles';
import { Slider } from '../../components/Carousel';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/NewHeader';
import { CardImg } from '../../components/NewCardImg2';

// Styles
import {
  Container, CardDiv, DivPagination, CarouselDiv,
} from './styles';
// Api conection
import { apiImobile } from '../../services/apiImobile';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export const Home = () => {
  const classes = useStyles();
  const [itemList, setItemList] = useState([]);
  const [totalPages, setTotalPages] = useState();

  const [pageable, setPageable] = useState({
    paginacao: {
      itensPorPagina: 6,
      paginaAtual: 1,
    },
  });

  const getPaginationRequest = useCallback(() => {
    apiImobile.getImoveis(pageable)
      .then(({ data: { content } }) => {
        setTotalPages(Math.ceil(content.totalItens / 6));
        setItemList(content.listaPaginada);
      });
  }, [pageable]);

  useEffect(() => {
    getPaginationRequest();
  }, [pageable]);

  return (
    <>
      <Header title="Home" />
      <CarouselDiv>
        <Slider />
      </CarouselDiv>

      <Container>

        <DivPagination>
          <div className={classes.root}>
            <Pagination
              count={totalPages}
              defaultPage={1}
              siblingCount={3}
              onChange={(e, value) => {
                const pagination = {
                  paginacao: {
                    itensPorPagina: 6,
                    paginaAtual: value,
                  },
                };
                setPageable(pagination);
              }}
            />
          </div>
        </DivPagination>

        {itemList
          && (
          <CardDiv>
            { itemList.map((imovel) => (
              <CardImg
                key={imovel.id}
                imovel={imovel}
              />
            ))}
          </CardDiv>
          )}
      </Container>
      <Footer />
    </>
  );
};
