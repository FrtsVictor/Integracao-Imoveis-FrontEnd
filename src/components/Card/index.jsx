import React from 'react';

// _______________Icons
import ApartmentIcon from '@material-ui/icons/Apartment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import RoomIcon from '@material-ui/icons/Room';
import BathtubIcon from '@material-ui/icons/Bathtub';
import HotelIcon from '@material-ui/icons/Hotel';
import ShuffleSharpIcon from '@material-ui/icons/ShuffleSharp';
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';

// _______________Styles
import {
  CardContainer, HouseImg, CardP, Info, LineDiv, IconDiv, FavIcon,
} from './styles';

const Card = ({
  cidade, valor, bairro, tipo, banheiros, dormitorios, transacao,
}) => (

  <CardContainer>
    <HouseImg />
    <Info>
      <FavIcon>
        <FavoriteBorderSharpIcon />
      </FavIcon>

      <CardP>
        <ApartmentIcon />
        {tipo}
      </CardP>

      <CardP>
        <RoomIcon />
        {cidade}
        {' / '}
        {bairro}
      </CardP>

      <CardP>
        <AttachMoneyIcon />
        {valor}
      </CardP>

      <LineDiv>
        <CardP>
          <IconDiv>
            <BathtubIcon />
            {banheiros}
          </IconDiv>
        </CardP>

        <CardP>
          <IconDiv>
            <HotelIcon />
            {dormitorios}
          </IconDiv>
        </CardP>

        <CardP>
          <IconDiv>
            <ShuffleSharpIcon />
            {transacao}
          </IconDiv>
        </CardP>

      </LineDiv>
    </Info>
  </CardContainer>
);

export default Card;
