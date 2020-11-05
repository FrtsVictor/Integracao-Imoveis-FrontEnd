import * as React from 'react';
import {
  AppBar,
  Hidden,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Fab,
} from '@material-ui/core';
import { KeyboardArrowUp } from '@material-ui/icons';
import { Link } from 'react-router-dom';
import PersonIcon from '@material-ui/icons/Person';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import HideOnScroll from './HideOnScroll';
import SideDrawer from './SideDrawer';
import BackToTop from './BackToTop';

// styles
import { Container, useStyles } from './styles';

import { Logo } from './Logo';
import LogoImg from '../../assets/logo_1_white.png';

const navLinks = [
  { title: 'login', path: '/login' },
  { title: 'cadastro', path: '/cadastro' },
  { title: 'favoritos', path: '/favoritos' },
  { title: 'search', path: '/search' },
];

export const Header = () => {
  const classes = useStyles();

  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" color="#0071C2">
          <Container>

            <Link to="/">
              <Logo
                src={LogoImg}
              />
            </Link>

            <Hidden smDown>
              <List
                component="nav"
                aria-labelledby="main navigation"
                className={classes.navListDisplayFlex}
              >

                <a href="/login" key="login" className={classes.linkText}>
                  <ListItem button>
                    <PersonIcon />
                    <ListItemText primary="login" />
                  </ListItem>
                </a>
                <a href="/cadastro" key="cadastro" className={classes.linkText}>
                  <ListItem button>
                    <PersonAddIcon />
                    <ListItemText primary="cadastro" />
                  </ListItem>
                </a>
                <a href="/favoritos" key="favoritos" className={classes.linkText}>
                  <ListItem button>
                    <FavoriteBorderIcon />
                    <ListItemText primary="favoritos" />
                  </ListItem>
                </a>
                <a href="/search" key="search" className={classes.linkText}>
                  <ListItem button>
                    <SearchIcon />
                    <ListItemText primary="search" />
                  </ListItem>
                </a>

              </List>
            </Hidden>
            <Hidden mdUp>
              <SideDrawer navLinks={navLinks} />
            </Hidden>
          </Container>

        </AppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />

      <BackToTop>
        <Fab color="primary" size="large" aria-label="scroll back to top">
          <KeyboardArrowUp />
        </Fab>
      </BackToTop>

    </>
  );
};
