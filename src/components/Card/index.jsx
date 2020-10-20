import React from 'react';

// _______________Icons
import ApartmentIcon from '@material-ui/icons/Apartment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import RoomIcon from '@material-ui/icons/Room';
import BathtubIcon from '@material-ui/icons/Bathtub';
import HotelIcon from '@material-ui/icons/Hotel';
import ShuffleSharpIcon from '@material-ui/icons/ShuffleSharp';
import FavoriteBorderSharpIcon from '@material-ui/icons/FavoriteBorderSharp';
import HomeIcon from '@material-ui/icons/Home';
import IconButton from '@material-ui/core/IconButton';

// ApiConnection
import apiIntegracaoImoveis from '../../services/apiIntegracaoImoveis';

// _______________Styles
import {
  CardContainer, HouseImg, CardP, Info, LineDiv, IconDiv, FavIcon,
} from './styles';

const Card = ({
  cidade, valor, bairro, tipo, banheiros, dormitorios, transacao, urlImagem, imovel,

}) => {
  const likeButton = (imovelObj) => {
    apiIntegracaoImoveis.post(imovelObj)
      .then((resp) => resp);
  };

  return (
    <CardContainer>
      <HouseImg urlImagem={urlImagem} />
      <Info>
        <FavIcon>
          <IconButton
            color="default"
            aria-label="add an alarm"
            onClick={() => likeButton(imovel)}
          >
            <FavoriteBorderSharpIcon />
          </IconButton>
        </FavIcon>

        <CardP>
          {tipo === 'Casa' ? <HomeIcon /> : <ApartmentIcon />}
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
          { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor)}
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
              {(transacao === 'V' ? 'Venda' : 'Locação')}
            </IconDiv>
          </CardP>

        </LineDiv>
      </Info>
    </CardContainer>
  );
};

export default Card;
