import React from 'react';
import { Link } from 'react-router-dom';
import { Title, Container } from './styles';
import { FiSearch, FiUser } from 'react-icons/fi';

const Header = ({ title }) => (
  <>
    <Title>{title}</Title>
    <Container>

      <ul>
        <li>
          <Link to="/Home">
            Home
          </Link>
        </li>
        <li>
          <Link to="/Cadastro">
            Cadastro
          </Link>
        </li>
        <li>
          <Link to="/Favoritos">
            Favoritos
          </Link>
        </li>
        <li>
          <Link >
                 <Link to='/Login'>Login  <FiUser /></Link>
          </Link>
        </li>
      </ul>

    </Container>

  </>
);

export default Header;
