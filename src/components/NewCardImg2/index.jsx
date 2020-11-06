import React, { useState } from 'react';
// Material Icons
import StarBorderIcon from '@material-ui/icons/StarBorder';
import ApartmentIcon from '@material-ui/icons/Apartment';
import HomeIcon from '@material-ui/icons/Home';
import BathtubIcon from '@material-ui/icons/Bathtub';
import HotelIcon from '@material-ui/icons/Hotel';
import ShuffleSharpIcon from '@material-ui/icons/ShuffleSharp';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
// RandomImg
import { RandomImg } from '../RandomImages';
// Api
import { useUser } from '../core/UserProvider/useUser';
import { apiIntegracaoImvs } from '../../services/apiIntegracaoImoveis';
// Modal
import { ModalImovel } from '../ModalImovel';
// Alert
import { CustomizedSnackbars } from '../Alert';
// styled
import {
  Container, CardDescription, CardIcons, ModalDiv,
} from './styles';

const idRenamer = (imvs) => {
  const { id: idImobile } = imvs;
  const { id, ...imovelNovo } = imvs;
  const idRenamed = { ...imovelNovo, idImobile };
  return idRenamed;
};

const likeButton = (imovel, user) => {
  apiIntegracaoImvs.user.addImovel(user.id, idRenamer(imovel))
    .then(() => console.log('imovel adicionado'));
};

export const CardImg = ({ imovel }) => {
  const imv = { ...imovel };
  const { user } = useUser();
  let liked = false;

  // Ramdom imgs
  const img = imv.urlImagem === null ? RandomImg : imv.urlImagem;

  // Check liked
  const test = '39f814d0-9f74-04ba-bdce-6126ec6adefb';
  if (imv.id === test) liked = true;

  //   _________Modal
  const [open2, setOpen] = useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const [alert, setAlert] = useState(false);

  const handleClose2 = (event, reason) => {
    // if (reason === 'clickaway') {
    //   return;
    // }

    setOpen(false);
  };

  return (
    <>
      <ModalImovel open={open2} handleClose={handleClose} imovel={imovel} />
      <Container img={img}>
        {/* <CustomizedSnackbars handleClose={handleClose2} open={alert} setOpen={setAlert} /> */}
        <CardDescription liked={liked}>
          <div>
            <h4>
              {imv.cidade}
              {' / '}
              {imv.bairro}
            </h4>
            <p>
              { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(imv.valor) || 0}
            </p>
          </div>

          <div>
            <button
              type="button"
              onClick={() => { setAlert(true); }}
            >
              {(liked ? <FavoriteIcon /> : <FavoriteBorderIcon />)}
            </button>
          </div>

        </CardDescription>

        <ModalDiv onClick={() => { setOpen(true); }} />

        <CardIcons>
          {(imv.destaque ? (
            <div>
              <StarBorderIcon />
              <span style={{ fontSize: '14px' }}>
                Destaque
              </span>
            </div>
          ) : '')}
          <div>
            {imv.tipo === 'Casa' ? <HomeIcon /> : <ApartmentIcon />}
            <span>
              {imv.tipo === 'Casa' ? 'Casa' : 'Apt'}
            </span>
          </div>
          <div>
            <BathtubIcon />
            <span>{imv.banheiros || 1}</span>
          </div>
          <div>
            <HotelIcon />
            <span>{imv.dormitorios || 1}</span>
          </div>
          <div>
            <ShuffleSharpIcon />
            <span>{(imv.transacao === 'V' ? 'Venda' : 'Locação')}</span>
          </div>
        </CardIcons>
      </Container>
    </>
  );
};
