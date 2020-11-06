/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect, useCallback } from 'react';
// My Components
import { Paginations } from '../../components/Pagination';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/NewHeader';
import { FavoriteCard } from '../../components/FavoriteCard';
// Api & Hook
import { useUser } from '../../components/core/UserProvider/useUser';
import { apiIntegracaoImvs } from '../../services/apiIntegracaoImoveis';
// Styles
import {
  Container, CardContainer, Filter, LineInput, CardDiv, PageDiv, InputType, SearchTitle, FilterGrid,
} from './styles';

export const Favoritos = () => {
  const { user: { id } } = useUser();
  const [pageable, setPageable] = useState([]);
  const [itemList, setItemList] = useState([]);
  const [atualPage, setAtualPage] = useState(0);
  const [update, setUpdate] = useState();

  //   _____________Filters

  const [transacao, setTransacao] = useState();
  const [tipo, setTipo] = useState();
  const [destaque, setDestaque] = useState();

  const [bairro, setBairro] = useState();
  const [cidade, setCidade] = useState();

  const updateScreen = (screen) => setUpdate(screen);
  const getPages = (pages) => setAtualPage(pages);

  const getPaginationRequest = useCallback(() => {
    apiIntegracaoImvs.user.getPageableFavs(atualPage, 148)
      .then(({ data }) => {
        const pagination = {
          firstPage: data.first,
          lastPage: data.last,
          atualPage: data.number,
          totalPages: data.totalPages,
          totalElements: data.totalElements,
        };
        setPageable(pagination);
        console.log(data.content);
        setItemList(data.content);
      });
  }, [pageable, atualPage]);

  useEffect(() => {
    getPaginationRequest();
  }, [atualPage, update]);

  return (
    <>
      <Header title="Favoritos" />
      <Container>
        <Filter>
          <FilterGrid>
            <InputType>

              <SearchTitle>
                <h2>Filtros</h2>
                <h3>Tipo</h3>
              </SearchTitle>

              {/* <input
                type="checkbox"
                id="locacao"
                name=""
                value="L"
              />
              <label htmlFor="">Locação</label> */}

              <LineInput>
                <input
                  type="checkbox"
                  id="venda"
                  name=""
                  value="V"
                />
                <label htmlFor="">Venda</label>
              </LineInput>

              <LineInput>
                <input
                  type="checkbox"
                  id="casa"
                  name=""
                  value="Casa"
                />
                <label htmlFor="">Casa</label>
              </LineInput>

              <LineInput>
                <input
                  type="checkbox"
                  id="apt"
                  name=""
                  value="Apartamento APT"
                />
                <label htmlFor="">Apartamento</label>
              </LineInput>

              <LineInput>
                <input
                  type="checkbox"
                  id="destaque"
                  name=""
                  value="destaque"
                />
                <label htmlFor="">Destaque</label>
              </LineInput>
              {/* <LineInput>
                <input
                  type="checkbox"
                  id="apt"
                  name=""
                  value="Apartamento APT"
                />
                <label htmlFor="">Apartamento</label>
              </LineInput> */}
            </InputType>

          </FilterGrid>
        </Filter>

        <CardContainer>
          {itemList.map((imovel) => (
            <CardDiv>
              <FavoriteCard imovel={imovel} updateScreen={updateScreen} update={update} />
            </CardDiv>
          ))}
        </CardContainer>
      </Container>
      <PageDiv>
        <Paginations getPages={getPages} pageable={pageable} />
      </PageDiv>
      <Footer />
    </>
  );
};
