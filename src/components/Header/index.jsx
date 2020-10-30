import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonIcon from '@material-ui/icons/Person';
import HomeIcon from '@material-ui/icons/Home';
import { Container, LinksContainer, LogoContainer } from './styles';
import logoImg from '../../assets/logo_1.png';
import { useUser } from '../core/UserProvider/useUser';

const Header = () => {


const { user: { username } } = useUser();

  return (
    <>
      <Container>
        <LogoContainer>
          <Link to="/Home"><img src={logoImg} alt="" /></Link>
        </LogoContainer>

        <LinksContainer>


          <ul>

          <li>
              <Link to="/home">Home
              <HomeIcon />
              </Link>
            </li>
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
              {(username && <span>{username}</span>)
               || (
               <Link to="/Login">
                 Entrar
                 <PersonIcon />
               </Link>
               )}

            </li>

          </ul>
        </LinksContainer>

      </Container>
    </>
  );
};

export default Header;
