import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

import Container, { HouseImg } from './styles';

import casa7 from '../../assets/casa7.jpg';
import casa2 from '../../assets/casa2.jpg';
import casa3 from '../../assets/casa3.jpg';
import casa4 from '../../assets/casa4.jpg';
import casa5 from '../../assets/casa5.jpg';

export const Slider = () => (

  <Container>
    <AwesomeSlider>
      <div>
        <HouseImg urlImagem={casa7} />
      </div>
      <div>
        <HouseImg urlImagem={casa2} />
      </div>
      <div>
        <HouseImg urlImagem={casa3} />
      </div>
      <div>
        <HouseImg urlImagem={casa5} />
      </div>
      <div>
        <HouseImg urlImagem={casa4} />

      </div>
    </AwesomeSlider>
  </Container>

);
