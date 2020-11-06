import React from 'react';

import PinterestIcon from '@material-ui/icons/Pinterest';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';

import {
  Container, Link, IconsDiv, TeamDiv,
} from './styles';

export const Footer = () => (
  <Container>

    <h5>Siga a gente</h5>
    <IconsDiv>
      <li className="list-unstyled">
        <Link href="https://www.instagram.com/immobilesoftware/"><InstagramIcon /></Link>
      </li>
      <li className="list-unstyled">

        <Link href="https://www.facebook.com/immobilesoftware"><FacebookIcon /></Link>
      </li>
      <li className="list-unstyled">
        <Link href="https://br.pinterest.com/"><PinterestIcon /></Link>
      </li>
      <li className="list-unstyled">
        <Link href="https://www.linkedin.com/company/immobile-software"><TwitterIcon /></Link>
      </li>
    </IconsDiv>

    <TeamDiv>
      <p>Termos e Condições Gerais de contratação política de privacidade</p>
      &copy;
      {new Date().getFullYear()}
      Copyright by equipe Immobile
      <Link href="https://immobile.software/"> Integração imóveis</Link>
    </TeamDiv>
  </Container>
);
