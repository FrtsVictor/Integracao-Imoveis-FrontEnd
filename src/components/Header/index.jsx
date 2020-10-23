import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import PersonIcon from '@material-ui/icons/Person';
import {
  Container, LinksContainer, LogoContainer, SearchContainer,
} from './styles';
import logoImg from '../../assets/logo_1.png';

const Header = () => {
  const history = useHistory();
  const [query, setQuery] = useState('');

  // const getUser = () => { // pra mostrar o usuário logado, aguardando api com as rotas
  //   let user = JSON.parse(localStorage.getItem('Rota:user'))
  //   return user
  // }

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

            <button><FiSearch /></button>
          </form>

        </SearchContainer>

        <LinksContainer>

          <ul>
            <li>
              <Link to="/Favoritos">Favoritos</Link>
            </li>
            <li>
              <Link to="/Login">
                Entrar
                <PersonIcon />
              </Link>

            </li>

          </ul>
        </LinksContainer>

      </Container>
    </>
  );
};

export default Header;
