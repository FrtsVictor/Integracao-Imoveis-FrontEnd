import React from 'react';
import { Link } from 'react-router-dom';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PersonIcon from '@material-ui/icons/Person';
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
          </form>

        </SearchContainer>


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
