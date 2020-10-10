import React from 'react';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { Container } from './styles';
import logoImg from '../../assets/logo_1.png';

const Header = () => (
  <Container>
    <Link to="/Home"><img src={logoImg} alt="" /></Link>
    <form>
      <input type="text" placeholder="Pesquise seu imóvel aqui" />
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

);

export default Header;
