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

// Moral
import ModalImovel from '../ModalImovel';

// ApiConnection
import apiIntegracaoImoveis from '../../services/apiIntegracaoImoveis';

// _______________Styles
import {
  CardContainer, HouseImg, CardP, Info, LineDiv, IconDiv, FavIcon, DivImg,
} from './styles';

const Card = ({
  urlImagem, imovel,

}) => {
  const likeButton = (imovelObj) => {
    apiIntegracaoImoveis.post(imovelObj)
      .then((resp) => resp);
  };

  //   _________ModalOpen

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <CardContainer>
      <DivImg onClick={handleOpen}>
        <HouseImg
          urlImagem={urlImagem}
        />
      </DivImg>
      <ModalImovel open={open} handleClose={handleClose} imovel={imovel} />

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
          {imovel.tipo === 'Casa' ? <HomeIcon /> : <ApartmentIcon />}
          {imovel.tipo}
        </CardP>

        <CardP>
          <RoomIcon />
          {imovel.cidade}
          {' / '}
          {imovel.bairro}
        </CardP>

        <CardP>
          <AttachMoneyIcon />
          { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(imovel.valor)}
        </CardP>

        <LineDiv>
          <CardP>
            <IconDiv>
              <BathtubIcon />
              {imovel.banheiros}
            </IconDiv>
          </CardP>

          <CardP>
            <IconDiv>
              <HotelIcon />
              {imovel.dormitorios}
            </IconDiv>
          </CardP>

          <CardP>
            <IconDiv>
              <ShuffleSharpIcon />
              {(imovel.transacao === 'V' ? 'Venda' : 'Locação')}
            </IconDiv>
          </CardP>

        </LineDiv>
      </Info>
    </CardContainer>
  );
};

export default Card;
