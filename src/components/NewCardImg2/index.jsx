import React from 'react';
import ApartmentIcon from '@material-ui/icons/Apartment';
import HomeIcon from '@material-ui/icons/Home';
import BathtubIcon from '@material-ui/icons/Bathtub';
import HotelIcon from '@material-ui/icons/Hotel';
import ShuffleSharpIcon from '@material-ui/icons/ShuffleSharp';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { RandomImg } from '../RandomImages';
// Api
import { useUser } from '../core/UserProvider/useUser';
import { apiIntegracaoImvs } from '../../services/apiIntegracaoImoveis';
// Modal
import { ModalImovel } from '../ModalImovel';
// styled
import {
  Container, CardDescription, CardIcons, ModalDiv,
} from './styles';

export const CardImg = ({ imovel }) => {
  const imv = { ...imovel };
  const { user } = useUser();
  const img = imv.urlImagem === null ? RandomImg : imv.urlImagem;

  //   _________ModalOpen
  const [open, setOpen] = React.useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const idRenamer = (imvs) => {
    const { id: idImobile } = imvs;
    const { id, ...imovelNovo } = imvs;
    const idRenamed = { ...imovelNovo, idImobile };
    return idRenamed;
  };

  const likeButton = () => {
    apiIntegracaoImvs.user.addImovel(user.id, idRenamer(imovel))
      .then(() => console.log('imovel adicionado'));
  };

  return (
    <>
      <ModalImovel open={open} handleClose={handleClose} imovel={imovel} />

      <Container img={img}>
        <CardDescription>
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
              onClick={() => console.log(imv)}
            >
              <FavoriteBorderIcon />
            </button>
          </div>

        </CardDescription>

        <ModalDiv onClick={() => setOpen(true)} />

        <CardIcons>
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
