import React, { useState, useEffect, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../../components/Card';
import { FiX } from 'react-icons/fi';
import api from '../../services/api';

import { Container, Filter, Blur, Price, PriceActive, CardSection } from './styles';
import Header from '../../components/Header';

const Search = () => {
  const history = useHistory();
  const [property, setProperty] = useState(['']);
  const [filteredproperty, setFilteredProperty] = useState(['']);
  const [categories, setType] = useState([]);

  const [filters, setFilters] = useState([]);
  const [activePriceFilter, setActivePriceFilter] = useState(false);
  const [minValue, setMinValue] = useState();
  const [maxValue, setMaxValue] = useState();

  const [searchQuery, setSearchQuery] = useState([]);

  const loadProperty = useCallback(
    async () => {
      const response = await api.get('tipo');

      setProperty(response.data);
    }, [],
  );

  const loadFiltered = useCallback(
    () => {
      const query = history.location.search.replace('?', '').split('&');
      setSearchQuery(query);
      let filtered = property;

      try {
        if (query.length > 0) {
          filtered = filtered.filter(card => (
            query.some(q => card.nome.toLowerCase().includes(q)
              || card.nomeTipo.toLowerCase().includes(q)
              || card.tipo.toLowerCase().includes(q))
          ));
        }

        if (filters.length > 0) {
          filtered = filtered.filter(card => (
            filters.includes(card.nomeTipo)
          ));
        }
        if (activePriceFilter) {
          filtered = filtered.filter(card => (
            card.valor <= maxValue && card.valor >= minValue
          ));
        }
      } catch (error) {
        console.log(error);
      }

      setFilteredProperty(filtered);

    },[property, filters, maxValue, minValue, activePriceFilter, history.location.search]
  );

  const loadType = async () => {
    const response = await api.get('tipo');
    setType(response.data);
  }

  useEffect(() => {
    loadProperty();
    loadType();
  }, []);

  useEffect(() => {
    loadFiltered();
  }, [filters, loadFiltered, history.location])

  const addFilter = (e) => {
    if (e.checked) {
      setFilters(filters.concat(e.value))
    } else {
      setFilters(filters.filter(f => f !== e.value))
    }
  }

  function convertPrice(value) {
    return Number(value).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
  }

  return (
    <>
      <Header />
      <Container>

        <Filter>
          <h2>Filtros</h2>
          <h4>Tipo</h4>
          {categories.map(type => (

            <div key={type.id}>
              <input
                onClick={e => addFilter(e.target)}
                type="checkbox"
                id={type.id}
                value={type.nome}
              />
              <label htmlFor={type.id}>{type.nome}</label>
            </div>
          ))}

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
                {/* <FiX /><span>remover</span> */}
              </div>


            </PriceActive>
          }
        </Filter>

        <CardSection>
          <p><strong>Resultado da pesquisa: </strong>{searchQuery.join(' ')}</p>
          {!filteredproperty.length ? <span>Nenhum produto encontrado :( </span> :
            filteredproperty.map(card => (
              <Blur >
                {/* <Card key={card.id} card={card} /> */}
                {card.qtdEstoque < 1 && <p id="unavailable">Produto indisponivel</p>}
                <hr style={{ color: '#eee' }} />
              </Blur>
            ))}
        </CardSection>
      </Container>
    </>
  );
};

export default Search;
