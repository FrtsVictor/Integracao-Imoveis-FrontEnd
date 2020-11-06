import React from 'react';

// Icons
import StarIcon from '@material-ui/icons/Star';
import ApartmentIcon from '@material-ui/icons/Apartment';
import HomeIcon from '@material-ui/icons/Home';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import RoomIcon from '@material-ui/icons/Room';
import BathtubIcon from '@material-ui/icons/Bathtub';
import HotelIcon from '@material-ui/icons/Hotel';
import ShuffleSharpIcon from '@material-ui/icons/ShuffleSharp';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import FavoriteIcon from '@material-ui/icons/Favorite';

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

  let liked = false;
  const test = '39f814d0-9f74-04ba-bdce-6126ec6adefb';
  if (imovel.id === test) liked = true;

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

      <Info liked={liked}>
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
              {liked ? <FavoriteIcon style={{ fill: '#f57474' }} /> : <FavoriteBorderIcon />}
            </button>
          </div>
        </FavIcon>
        <Row>
          <div>
            <span>
              <RoomIcon />
            </span>
            {imovel.cidade}
            {' / '}
            {imovel.bairro}
          </div>

          <div>
            <span>
              <AttachMoneyIcon />
            </span>
            { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(imovel.valor)}
          </div>

          <div>
            <span>
              <HomeWorkIcon />
            </span>
            { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(imovel.valorCondominio)}
          </div>
          <div>
            <span>
              <StarIcon />
            </span>
            Destaque
          </div>

        </Row>

        <LineDiv>
          <div>
            <BathtubIcon />
            <span>
              {imovel.banheiros}
            </span>
          </div>

          <div>
            <HotelIcon />
            <span>
              {imovel.dormitorios}
            </span>
          </div>

          <div>
            <ShuffleSharpIcon />
            <span>
              {(imovel.transacao === 'V' ? 'Venda' : 'Locação')}
            </span>
          </div>
        </LineDiv>

      </Info>

    </CardContainer>
  );
};
