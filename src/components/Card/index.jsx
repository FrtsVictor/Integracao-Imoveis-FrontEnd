import React from 'react';

// Icons
import ApartmentIcon from '@material-ui/icons/Apartment';
import HomeIcon from '@material-ui/icons/Home';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import RoomIcon from '@material-ui/icons/Room';
import BathtubIcon from '@material-ui/icons/Bathtub';
import HotelIcon from '@material-ui/icons/Hotel';
import ShuffleSharpIcon from '@material-ui/icons/ShuffleSharp';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import HomeWorkIcon from '@material-ui/icons/HomeWork';

// Hooks & Api
import { useUser } from '../core/UserProvider/useUser';
import { apiIntegracaoImvs } from '../../services/apiIntegracaoImoveis';

// Modal
import { ModalImovel } from '../ModalImovel';

// Styles
import {
  CardContainer, HouseImg, Info, LineDiv, FavIcon, DivImg, Row,
} from './styles';

export const Card = ({ imovel }) => {
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
          <div>
            {imovel.tipo === 'Casa' ? <HomeIcon /> : <ApartmentIcon />}
            {imovel.tipo === 'Casa' ? 'Casa' : 'APT'}
          </div>
          <div>
            <button
              type="button"
              onClick={() => likeButton(imovel)}
            >
              <FavoriteBorderIcon />
            </button>
          </div>
        </FavIcon>
        <Row>
          <div>
            <RoomIcon />
            {imovel.cidade}
            {' / '}
            {imovel.bairro}
          </div>

          <div>
            <AttachMoneyIcon />
            { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(imovel.valor)}
          </div>

          <div>
            <HomeWorkIcon />
            { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(imovel.valorCondominio)}
          </div>

        </Row>

        <LineDiv>
          <div>
            <BathtubIcon />
            {imovel.banheiros}
          </div>

          <div>
            <HotelIcon />
            {imovel.dormitorios}
          </div>

          <div>
            <ShuffleSharpIcon />
            {(imovel.transacao === 'V' ? 'Venda' : 'Locação')}
          </div>
        </LineDiv>

      </Info>

    </CardContainer>
  );
};
