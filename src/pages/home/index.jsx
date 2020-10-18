import React, { useState } from 'react';

import Header from '../../components/Header';
import Card from '../../components/Card';
import Carousel from '../../components/Carousel';

import { Container } from './styles';

const Home = () => {
  // _________________Test
  const titulo = 'Apartamento com 2 quartos sala e banheiro mais sala de estar';
  const valor = '280.000.00';
  const tipo = 'Apartamento - APT';
  const bairro = 'Agrioes';
  const cidade = 'Teresópolis';
  const dormitorios = 1;
  const banheiros = 1;
  const transacao = 'Venda';
  const destaque = true;

  return (
    <>
      <Header title="Home" />
      <Carousel />
      <Container>
        <Card
          titulo={titulo}
          valor={valor}
          bairro={bairro}
          tipo={tipo}
          cidade={cidade}
          dormitorios={dormitorios}
          banheiros={banheiros}
          transacao={transacao}
          destaque={destaque}
        />
        <Card
          titulo={titulo}
          valor={valor}
          bairro={bairro}
          tipo={tipo}
          cidade={cidade}
          dormitorios={dormitorios}
          banheiros={banheiros}
          transacao={transacao}
          destaque={destaque}
        />
        <Card
          titulo={titulo}
          valor={valor}
          bairro={bairro}
          tipo={tipo}
          cidade={cidade}
          dormitorios={dormitorios}
          banheiros={banheiros}
          transacao={transacao}
          destaque={destaque}
        />
        <Card
          titulo={titulo}
          valor={valor}
          bairro={bairro}
          tipo={tipo}
          cidade={cidade}
          dormitorios={dormitorios}
          banheiros={banheiros}
          transacao={transacao}
          destaque={destaque}
        />
        <Card
          titulo={titulo}
          valor={valor}
          bairro={bairro}
          tipo={tipo}
          cidade={cidade}
          dormitorios={dormitorios}
          banheiros={banheiros}
          transacao={transacao}
          destaque={destaque}
        />

        <Card
          titulo={titulo}
          valor={valor}
          bairro={bairro}
          tipo={tipo}
          cidade={cidade}
          dormitorios={dormitorios}
          banheiros={banheiros}
          transacao={transacao}
          destaque={destaque}
        />

      </Container>
    </>
  );
};
export default Home;
