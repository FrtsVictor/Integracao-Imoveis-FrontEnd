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
import { useUser } from '../core/UserProvider/useUser';

// Modal
import ModalImovel from '../ModalImovel';

// ApiConnection
import { apiIntegracaoImvs } from '../../services/apiIntegracaoImoveis';

// _______________Styles
import {
  CardContainer, HouseImg, CardP, Info, LineDiv, IconDiv, FavIcon, DivImg, Row, IconLeft, IconRight,
} from './styles';

const Card = ({ imovel }) => {
  const { user } = useUser();

  const idRenamer = (imv) => {
    const { id: idImobile } = imv;
    const { id, ...imovelNovo } = imv;
    const idRenamed = { ...imovelNovo, idImobile };
    return idRenamed;
  };

  const likeButton = () => {
    apiIntegracaoImvs.user.addImovel(user.id, idRenamer(imovel))
      .then(() => console.log('imovel adicionado'));
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
          urlImagem={imovel.urlImagem}
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
              <br />
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
          {' '}
          <br />

          <CardP>
            <AttachMoneyIcon />

            { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(imovel.valor)}
          </CardP>
          {' '}
          <br />
          <CardP>
            <HomeWorkIcon />
            { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(imovel.valorCondominio)}
          </CardP>

        </Row>

        <LineDiv>
          <IconDiv>
            <CardP>
              <BathtubIcon />
              {imovel.banheiros}
            </CardP>
          </IconDiv>

          <IconDiv>
            <CardP>
              <HotelIcon />
              {imovel.dormitorios}
            </CardP>
          </IconDiv>

          <IconDiv>
            <CardP>
              <ShuffleSharpIcon />
              {(imovel.transacao === 'V' ? 'Venda' : 'Locação')}
            </CardP>
          </IconDiv>
        </LineDiv>

      </Info>

    </CardContainer>
  );
};

export default Card;
