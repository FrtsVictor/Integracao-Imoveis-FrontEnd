import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import Container from './styles';

import casa1 from '../../assets/casa1.jpg';
import casa2 from '../../assets/casa2.jpg';
import casa3 from '../../assets/casa3.jpg';
import casa4 from '../../assets/casa4.jpg';

const Slider = () => (

  <Container>
    <AwesomeSlider>
      <div data-src={casa1} />
      <div data-src={casa2} />
      <div data-src={casa3} />
      <div data-src={casa4} />
    </AwesomeSlider>
  </Container>

);

export default Slider;
