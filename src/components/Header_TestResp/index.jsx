import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiUser, FiSearch } from 'react-icons/fi';
import {
  Container, LinksContainer, LogoContainer, SearchContainer,
} from './styles';
import logoImg from '../../assets/logo_1.png';

const Header = () => {
  const history = useHistory();
  const [query, setQuery] = useState('');

  return (
    <>
      <Container>
        <LogoContainer>
          <Link to="/Home"><img src={logoImg} alt="" /></Link>
        </LogoContainer>

        <SearchContainer>

          <form onSubmit={(e) => {
            e.preventDefault();
            history.push({
              pathname: '/search',
              search: query.split(' ').join('&'),
            });
            setQuery('');
          }}
          >
            <input
              type="text"
              placeholder="Pesquise seu imóvel aqui"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <button type="button"><FiSearch /></button>
          </form>

        </SearchContainer>

        <LinksContainer>
          <ul>
            <li>
              <Link to="/Favoritos">Favoritoss</Link>
            </li>
            <li>
              <Link to="/Login">
                Entrar
                <FiUser />
              </Link>
            </li>
          </ul>
        </LinksContainer>

      </Container>
    </>
  );
};

export default Header;
