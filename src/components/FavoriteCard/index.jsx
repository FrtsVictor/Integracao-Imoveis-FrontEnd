import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import NotInterestedIcon from '@material-ui/icons/NotInterested';
import BathtubIcon from '@material-ui/icons/Bathtub';
import HotelIcon from '@material-ui/icons/Hotel';
import ShuffleSharpIcon from '@material-ui/icons/ShuffleSharp';
import ApartmentIcon from '@material-ui/icons/Apartment';
import HomeIcon from '@material-ui/icons/Home';
import DefaultImg from '../../assets/casa1.jpg';

import { CardInfoIcons } from './styles';

const useStyles = makeStyles(() => ({
  root: {
    width: 345,
  },
  media: {
    height: '40%',
    paddingTop: '50%', // 16:9
  },
  avatar: {
    backgroundColor: '#6e6d6d',
  },
}));

export default function RecipeReviewCard({ imovel }) {
  const classes = useStyles();

  const title = `${imovel.bairro} / ${imovel.cidade} `;

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
            <NotInterestedIcon />
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
