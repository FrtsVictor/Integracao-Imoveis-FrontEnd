import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonIcon from '@material-ui/icons/Person';
import { Container, LinksContainer, LogoContainer } from './styles';
import logoImg from '../../assets/logo_1.png';

const Header = () => {


  return (
    <>
      <Container>
        <LogoContainer>
          <Link to="/Home"><img src={logoImg} alt="" /></Link>
        </LogoContainer>


        <LinksContainer>

          <ul>
          <li>
              <Link to="/search">Pesquisar
              <SearchIcon />
              </Link>
            </li>
            <li>
              <Link to="/Favoritos">Favoritos
                <FavoriteBorderIcon />
              </Link>
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
