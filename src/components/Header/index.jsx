import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiUser, FiSearch } from 'react-icons/fi';
import { Container } from './styles';
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
        <Link to="/Home"><img src={logoImg} alt="" /></Link>
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
            onChange={e => setQuery(e.target.value)}

          />

          <button><FiSearch/></button>

        </form>

        <ul>

          <li>
            <Link to="/Favoritos">Favoritos</Link>
          </li>
          <li>
            <Link to="/Login">
              Entrar
              <FiUser />
            </Link>

          </li>
        </ul>

      </Container>
    </>
  );
};

export default Header;
