/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import {
  Container, IconsContainer, LogoImg, LogoContainer, TextContainer,
} from './styles';

const Footer = () => (

  <Container>

    <LogoContainer>
      <LogoImg />
    </LogoContainer>

    <TextContainer>

      <p>Produzido por Residentes Serratec 2020 \o/</p>

    </TextContainer>

    <IconsContainer>
      <a href="https://instagram.com" className="fa fa-instagram" target="_blank" />
      <a href="https//facebook.com" className="fa fa-facebook" target="_blank" />
      <a href="https://twitter.com" className="fa fa-twitter" target="_blank" />
    </IconsContainer>

  </Container>

);

export default Footer;
