import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { FiX } from 'react-icons/fi';
import { Card } from '../../components/Card';
import api from '../../services/api';
import { Footer } from '../../components/Footer';
import {
  Container, Filter, Price, PriceActive, CardSection, InputType, Paginations,
} from './styles';
import { Header } from '../../components/NewHeader';

import { PaginationHome } from '../../components/PaginationHome';
import { apiImobile } from '../../services/apiImobile';

// ________________________________________________________________________________
export const Search = () => {
//   const acessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZExvZ2luIjoiMzlmODExOWItYzA1OC04NTNjLTM3ZjMtYmUxYjE0NTMzZjA3IiwiaWRBZG1pbmlzdHJhZG9yYSI6IjRmODM1Y2JhLTdjOWMtNGI5OS1hNGYzLTAzZmNiMmI2MTQyZCIsImlkUGVzc29hIjoiMzlmODExOWItYmZjNC0yMDBlLTY3MzItOWUyMzVjZGI0M2Q0Iiwibm9tZSI6IlBhdWxvIENlc2FyIiwiZW1haWwiOiJkZW5pc2UuZHNuLmltYkBhbHRlcmRhdGEuY29tLmJyIiwicGVyZmlsIjoiQ29ycmV0b3IiLCJ1cmxJbWFnZW0iOiJodHRwczovL3dlYi1pbW1vYmlsZXdlYi5zMy5hbWF6b25hd3MuY29tL2NvcnJldGFnZW0vcHVibGljYS80ZjgzNWNiYS03YzljLTRiOTktYTRmMy0wM2ZjYjJiNjE0MmQvY29ycmV0b3I2MzczNzU5OTE2Njc2MzMyNzAucG5nIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDEyLyJ9.31Px5-gjnIzQDaEHsAmxs71rXmeijg75fOgk9jzd9UQ';
//   const loadList = useCallback(
//     async () => {
//       try {
//         const resp = await api.post('Imovel/obter-lista', {}, config);
//         const test = resp.data.content.listaPaginada;
//         setApiList(test);
//         console.log(test);
//         console.log('LoadList', apiList);
//       } catch (error) {
//         console.log(error);
//       }
//     }, [],
//   );

  //   // _____________________________________________________________

  //   useEffect(() => {
  //     loadList();
  //   }, []);

  //   const config = {
  //     headers: { Authorization: `bearer ${acessToken}` },
  //   };

  const [apiList, setApiList] = useState([]);
  const history = useHistory();
  const [filteredproperty, setFilteredProperty] = useState(['']);
  const [filters, setFilters] = useState([]); // Estado para filtro de Locação ou venda
  const [filtersType, setFiltersType] = useState([]); // Estado para filtro de casa ou Apt
  const [activePriceFilter, setActivePriceFilter] = useState(false);
  const [minValue, setMinValue] = useState();
  const [maxValue, setMaxValue] = useState();
  const [searchQuery, setSearchQuery] = useState([]);

  const [pageable, setPageable] = useState({
    paginacao: {
      itensPorPagina: 6,
      paginaAtual: 0,
      totalPaginas: 0,
    },
  });

  //   const [itemList, setItemList] = useState([]);
  const [atualPage, setAtualPage] = useState(1);

  const getPages = (pages) => setAtualPage(pages);

  const getPaginationRequest = useCallback(() => {
    apiImobile.getImoveis(pageable)
      .then(({ data: { content } }) => {
        const pagination = {
          paginacao: {
            itensPorPagina: 6,
            paginaAtual: atualPage,
            totalPaginas: Math.ceil(content.totalItens / 6) || 0,
          },
        };
        setPageable(pagination);
        setApiList(content.listaPaginada);
      });
  }, [pageable, atualPage]);

  useEffect(() => {
    getPaginationRequest();
  }, [atualPage]);

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

      <Paginations>
        <PaginationHome pageable={pageable} getPages={getPages} />
      </Paginations>

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
      <Footer styles={{ }} />
    </>

  );

  //   return (
  //     <>
  //       <Header />
  //       <Container>
  //         <Filter>
  //           <h2>Pesquisar</h2>

  //           <h3>Preço</h3>
  //           {!activePriceFilter
  //             ? (
  //               <Price>

  //                 <input
  //                   type="number"
  //                   value={minValue}
  //                   min="0"
  //                   max={maxValue}
  //                   onChange={(e) => setMinValue(e.target.value)}
  //                   placeholder="R$ 0.00"
  //                 />
  //                 <p>até</p>
  //                 <input
  //                   type="number"
  //                   value={maxValue}
  //                   min={minValue || 0}
  //                   onChange={(e) => setMaxValue(e.target.value)}
  //                   placeholder="R$ 0.00"
  //                 />
  //                 <input
  //                   type="button"
  //                   value="Aplicar"
  //                   onClick={() => minValue && maxValue && setActivePriceFilter(true)}
  //                 />
  //               </Price>
  //             )
  //             : (
  //               <PriceActive>
  //                 de
  //                 {' '}
  //                 {convertPrice(minValue)}
  //                 {' '}
  //                 até
  //                 {' '}
  //                 {convertPrice(maxValue)}
  //                 <div onClick={() => {
  //                   setMinValue();
  //                   setMaxValue();
  //                   setActivePriceFilter(false);
  //                 }}
  //                 >
  //                   <span>Limpar</span>
  //                 </div>

  //               </PriceActive>
  //             )}
  //           <br />
  //           <br />
  //           <h3>Filtros</h3>

  //           <InputType>
  //             <input
  //               type="checkbox"
  //               onClick={(e) => addFilter(e.target)}
  //               value="L"
  //             />
  //             <label htmlFor="">Locação</label>
  //             <br />

  //             <input
  //               type="checkbox"
  //               value="V"
  //               onClick={(e) => addFilter(e.target)}
  //             />
  //             <label htmlFor="">Venda</label>
  //             <br />

  //             <input
  //               type="checkbox"
  //               value="Casa"
  //               onClick={(e) => addFilterType(e.target)}
  //             />
  //             <label htmlFor="">Casa</label>
  //             <br />

  //             <input
  //               type="checkbox"
  //               value="Apartamento APT"
  //               onClick={(e) => addFilterType(e.target)}
  //             />
  //             <label htmlFor="">Apartamento</label>
  //           </InputType>

  //         </Filter>

  //         <CardSection>

  //           {filteredproperty.map((imovel) => (
  //             <div>
  //               <Card
  //                 imovel={{ ...imovel }}
  //                 urlImagem={imovel.urlImagem}
  //               />
  //             </div>
  //           ))}

  //         </CardSection>

  //       </Container>
  //       <Footer />
  //     </>

//   );
};
