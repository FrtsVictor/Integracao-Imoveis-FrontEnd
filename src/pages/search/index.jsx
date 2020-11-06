import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import Pagination from '@material-ui/lab/Pagination';
import { Card } from '../../components/Card';
import { Footer } from '../../components/Footer';
import {
  Container, Filter, Price, useStyles, PriceActive, CardSection, InputType, DivPagination,
} from './styles';

import { Header } from '../../components/NewHeader';
import { apiImobile } from '../../services/apiImobile';

// ________________________________________________________________________________
export const Search = () => {
  const classes = useStyles();
  const [apiList, setApiList] = useState([]);
  const history = useHistory();
  const [filteredproperty, setFilteredProperty] = useState(['']);
  const [filters, setFilters] = useState([]); // Estado para filtro de Locação ou venda
  const [filtersType, setFiltersType] = useState([]); // Estado para filtro de casa ou Apt
  const [activePriceFilter, setActivePriceFilter] = useState(false);
  const [minValue, setMinValue] = useState();
  const [maxValue, setMaxValue] = useState();
  const [searchQuery, setSearchQuery] = useState([]);
  // Paginations
  const [totalPages, setTotalPages] = useState();
  const [atualPage, setAtualPage] = useState(1);
  const itensPorPagina = 6;
  const [pageable, setPageable] = useState({
    paginacao: {
      paginaAtual: 1,
      itensPorPagina,
    },
  });

  const getPaginationRequest = useCallback(() => {
    apiImobile.getImoveis(pageable)
      .then(({ data: { content } }) => {
        setTotalPages(Math.ceil(content.totalItens / itensPorPagina));
        setApiList(content.listaPaginada);
      });
  }, [pageable]);

  useEffect(() => {
    getPaginationRequest();
  }, [pageable]);

  const loadFiltered = useCallback(
    () => {
      const query = history.location.search.replace('?', '').split('&');
      setSearchQuery(query);
      let filtered = apiList;

      try {
        if (filters.length > 0) {
          filtered = filtered.filter((apiLists) => (
            filters.includes(apiLists.transacao)

          ));
        }
        if (filtersType.length > 0) {
          filtered = filtered.filter((apiLists) => (
            filtersType.includes(apiLists.tipo)

          ));
        }
        if (activePriceFilter) {
          filtered = filtered.filter((apiLists) => (
            apiList.valor <= maxValue && apiLists.valor >= minValue

          ));
        }
      } catch (error) {
        console.log(error);
      }

      setFilteredProperty(filtered);
    }, [apiList, filters, filtersType, maxValue, minValue, activePriceFilter, history.location.search],
  );

  useEffect(() => {
    loadFiltered();
  }, [filters, loadFiltered, history.location]);

  const addFilter = (e) => {
    if (e.checked) {
      setFilters(filters.concat(e.value));
    } else {
      setFilters(filters.filter((f) => f !== e.value));
    }
  };
  const addFilterType = (e) => {
    if (e.checked) {
      setFiltersType(filtersType.concat(e.value));
    } else {
      setFiltersType(filtersType.filter((f) => f !== e.value));
    }
  };

  function convertPrice(value) {
    return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

  return (
    <>
      <Header />
      <Container>
        <Filter>
          <h2>Filtros</h2>
          <h3>Tipo</h3>
          <InputType>
            <div>
              <input
                type="checkbox"
                id=""
                name=""
                onClick={(e) => addFilter(e.target)}
                value="L"
              />
              <label htmlFor="">Locação</label>
            </div>

            <div>
              <input
                type="checkbox"
                id=""
                name=""
                value="V"
                onClick={(e) => addFilter(e.target)}
              />
              <label htmlFor="">Venda</label>
            </div>

            <div>

              <input
                type="checkbox"
                id=""
                name=""
                value="Casa"
                onClick={(e) => addFilterType(e.target)}
              />
              <label htmlFor="">Casa</label>
            </div>

            <div>
              <input
                type="checkbox"
                id=""
                name=""
                value="Apartamento APT"
                onClick={(e) => addFilterType(e.target)}
              />
              <label htmlFor="">Apartamento</label>
            </div>
          </InputType>

          <h3>Preço</h3>
          {!activePriceFilter
            ? (
              <Price>

                <input
                  type="number"
                  value={minValue}
                  min="0"
                  max={maxValue}
                  onChange={(e) => setMinValue(e.target.value)}
                  placeholder="R$ 0.00"
                />
                <p>até</p>
                <input
                  type="number"
                  value={maxValue}
                  min={minValue || 0}
                  onChange={(e) => setMaxValue(e.target.value)}
                  placeholder="R$ 0.00"
                />
                <input
                  type="button"
                  value="Aplicar"
                  onClick={() => minValue && maxValue && setActivePriceFilter(true)}
                />
              </Price>
            )
            : (
              <PriceActive>
                de
                {' '}
                {convertPrice(minValue)}
                {' '}
                até
                {' '}
                {convertPrice(maxValue)}
                <div onClick={() => {
                  setMinValue();
                  setMaxValue();
                  setActivePriceFilter(false);
                }}
                >
                  <FiX />
                  <span>Limpar filtro</span>
                </div>

              </PriceActive>
            )}

        </Filter>

        {/* <div styles={{ display: 'inline-flex', position: 'fixed' }}> */}
        <CardSection>
          {filteredproperty.map((imovel) => (
            <div style={{ display: 'inlineFlex' }}>
              <Card
                imovel={{ ...imovel }}
                urlImagem={imovel.urlImagem}
              />
            </div>
          ))}
        </CardSection>

        {/* </div> */}

      </Container>
      <DivPagination>
        <div className={classes.root}>
          <Pagination
            count={totalPages}
            defaultPage={1}
            siblingCount={3}
            onChange={(e, value) => {
              const pagination = {
                paginacao: {
                  itensPorPagina,
                  paginaAtual: value,
                },
              };
              setPageable(pagination);
            }}
          />
        </div>
      </DivPagination>

      <Footer styles={{ }} />
    </>

  );
