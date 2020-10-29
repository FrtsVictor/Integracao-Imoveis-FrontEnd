import React from 'react';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';

import BathtubIcon from '@material-ui/icons/Bathtub';
import HotelIcon from '@material-ui/icons/Hotel';
import ShuffleSharpIcon from '@material-ui/icons/ShuffleSharp';
import ApartmentIcon from '@material-ui/icons/Apartment';
import HomeIcon from '@material-ui/icons/Home';
import DefaultImg from '../../assets/casa1.jpg';

import { apiIntegracaoImvs } from '../../services/apiIntegracaoImoveis';
import { useUser } from '../core/UserProvider/useUser';
import { CardInfoIcons, useStyles } from './styles';

export default function RecipeReviewCard({ imovel, updateScreen, update }) {
  const { user: { id } } = useUser();
  const classes = useStyles();

  const title = `${imovel.bairro} / ${imovel.cidade} `;

  const removeImovel = async () => {
    await apiIntegracaoImvs.user.removeImovel(id, imovel.id)
      .then(() => updateScreen(!update));
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={(
          <Avatar aria-label="recipe" className={classes.avatar}>
            {imovel.tipo === 'Casa' ? <HomeIcon /> : <ApartmentIcon />}
          </Avatar>
        )}
        title={title}
        subheader={new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(imovel.valor)}
        action={(
          <IconButton aria-label="Remover" title="Remover">
            <DeleteIcon
              onClick={() => removeImovel()}
            />
          </IconButton>
          )}
      />

      <CardMedia
        className={classes.media}
        image={imovel.urlImagem || DefaultImg}
        title={imovel.tipo}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">

          <CardInfoIcons>
            <BathtubIcon />
            {imovel.banheiros}

            <HotelIcon />
            {imovel.dormitorios}

            <ShuffleSharpIcon />
            {(imovel.transacao === 'V' ? 'Venda' : 'Locação')}
          </CardInfoIcons>

        </Typography>
      </CardContent>
    </Card>
  );
}
