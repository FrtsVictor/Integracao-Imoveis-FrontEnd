import React from 'react';

// _______________Icons
import ApartmentIcon from '@material-ui/icons/Apartment';
import HomeIcon from '@material-ui/icons/Home';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import RoomIcon from '@material-ui/icons/Room';
import BathtubIcon from '@material-ui/icons/Bathtub';
import HotelIcon from '@material-ui/icons/Hotel';
import ShuffleSharpIcon from '@material-ui/icons/ShuffleSharp';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

// Modal
import ModalImovel from '../ModalImovel';

// ApiConnection
import apiIntegracaoImoveis from '../../services/apiIntegracaoImoveis';

// _______________Styles
import {
  CardContainer, HouseImg, CardP, Info, LineDiv, IconDiv, FavIcon, DivImg, Row, IconLeft, IconRight,
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
          <IconLeft>
            {imovel.tipo === 'Casa' ? <HomeIcon /> : <ApartmentIcon />}
            {imovel.tipo === 'Casa' ? 'Casa' : 'APT'}
          </IconLeft>

          <IconRight>

            <button
              type="button"
              onClick={() => likeButton(imovel)}
            >
              <FavoriteBorderIcon />
            </button>
          </IconRight>

        </FavIcon>

        <Row>

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
          <CardP>
            <HomeWorkIcon />
            { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(imovel.valorCondominio)}
          </CardP>

        </Row>

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
