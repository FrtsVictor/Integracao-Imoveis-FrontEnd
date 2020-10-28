import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../../components/Card';
import { FiX } from 'react-icons/fi';
import api from '../../services/api';
import Footer from '../../components/Footer'
import { Container, Filter, Price, PriceActive, CardSection, InputType } from './styles';
import Header from '../../components/Header';
// ________________________________________________________________________________
const Search = () => {
    const acessToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZExvZ2luIjoiMzlmODExOWItYzA1OC04NTNjLTM3ZjMtYmUxYjE0NTMzZjA3IiwiaWRBZG1pbmlzdHJhZG9yYSI6IjRmODM1Y2JhLTdjOWMtNGI5OS1hNGYzLTAzZmNiMmI2MTQyZCIsImlkUGVzc29hIjoiMzlmODExOWItYmZjNC0yMDBlLTY3MzItOWUyMzVjZGI0M2Q0Iiwibm9tZSI6IlBhdWxvIENlc2FyIiwiZW1haWwiOiJkZW5pc2UuZHNuLmltYkBhbHRlcmRhdGEuY29tLmJyIiwicGVyZmlsIjoiQ29ycmV0b3IiLCJ1cmxJbWFnZW0iOiJodHRwczovL3dlYi1pbW1vYmlsZXdlYi5zMy5hbWF6b25hd3MuY29tL2NvcnJldGFnZW0vcHVibGljYS80ZjgzNWNiYS03YzljLTRiOTktYTRmMy0wM2ZjYjJiNjE0MmQvY29ycmV0b3I2MzczNzU5OTE2Njc2MzMyNzAucG5nIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo1MDEyLyJ9.31Px5-gjnIzQDaEHsAmxs71rXmeijg75fOgk9jzd9UQ';

    const [apiList, setApiList] = useState([]);
    const history = useHistory();
    const [filteredproperty, setFilteredProperty] = useState(['']);
    const [filters, setFilters] = useState([]); // Estado para filtro de Locação ou venda
    const [filtersType, setFiltersType] = useState([]); // Estado para filtro de casa ou Apt
    const [activePriceFilter, setActivePriceFilter] = useState(false);
    const [minValue, setMinValue] = useState();
    const [maxValue, setMaxValue] = useState();
    const [searchQuery, setSearchQuery] = useState([]);


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


    // const loadProperty = useCallback(
    //     async () => {
    //         const response = await api.get('tipo');

    //         setProperty(response.data);
    //     }, [],
    // );

    const loadFiltered = useCallback(
        () => {
            const query = history.location.search.replace('?', '').split('&');
            setSearchQuery(query);
            let filtered = apiList;

            try {

                if (filters.length > 0) {
                    filtered = filtered.filter((apiList) => (
                        filters.includes(apiList.transacao)

                    ));
                }
                if (filtersType.length > 0) {
                    filtered = filtered.filter((apiList) => (
                        filtersType.includes(apiList.tipo)

                    ));
                }
                if (activePriceFilter) {

                    filtered = filtered.filter((apiList) => (
                        apiList.valor <= maxValue && apiList.valor >= minValue

                    ));
                }
            } catch (error) {
                console.log(error);
            }

            setFilteredProperty(filtered);
        }, [apiList, filters,filtersType, maxValue, minValue, activePriceFilter, history.location.search],
    );

    //   const loadType = async () => {
    //     const response = await api.get('tipo');
    //     setType(response.data);
    //   };

    //   useEffect(() => {
    //     loadProperty();
    //     loadType();
    //   }, []);

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
                    <h4>Tipo</h4>
                    <br />
                    <InputType>
                    <input
                        type="checkbox"
                        id=""
                        name=""
                        onClick={e => addFilter(e.target)}
                        value="L"
                    />
                    <label htmlFor="">Locação</label>
                    <br />

                    <input
                        type="checkbox"
                        id=""
                        name=""
                        value="V"
                        onClick={e => addFilter(e.target)}
                    />
                    <label htmlFor="">Venda</label>
                    <br />

                    <input
                        type="checkbox"
                        id=""
                        name=""
                        value="Casa"
                        onClick={e => addFilterType(e.target)}
                    />
                    <label htmlFor="">Casa</label>
                    <br />

                    <input
                        type="checkbox"
                        id=""
                        name=""
                        value="Apartamento APT"
                        onClick={e => addFilterType(e.target)}
                    />
                    <label htmlFor="">Apartamento</label>
                    </InputType>


                    <h4>Preço</h4>
                    {!activePriceFilter
                        ?
                        <Price>
                            <input
                                type="number"
                                value={minValue}
                                min='0'
                                max={maxValue}
                                onChange={e => setMinValue(e.target.value)}
                                placeholder="min"
                            />
                            <input
                                type="number"
                                value={maxValue}
                                min={minValue ? minValue : 0}
                                onChange={e => setMaxValue(e.target.value)}
                                placeholder="max"
                            />
                            <input
                                type="button"
                                value="Aplicar"
                                onClick={() => minValue && maxValue && setActivePriceFilter(true)}
                            />
                        </Price> :
                        <PriceActive>
                            de {convertPrice(minValue)} até {convertPrice(maxValue)}
                            <div onClick={() => {
                                setMinValue();
                                setMaxValue();
                                setActivePriceFilter(false)
                            }} >
                                <FiX /><span>remover</span>
                            </div>

                        </PriceActive>

                    }

                </Filter>

                <CardSection>
                    <p><strong>Resultado da pesquisa: </strong></p>


                    {filteredproperty.map((imovel) => (
                        <div>
                            <Card
                                imovel={{ ...imovel }}
                                urlImagem={imovel.urlImagem}
                            />
                        </div>
                    ))}

                </CardSection>


            </Container>
            <Footer />
        </>

    );

};

export default Search;
