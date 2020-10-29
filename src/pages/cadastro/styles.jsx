import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import BackGroundImg from '../../assets/background_signUp.jpg';
import logoImg from '../../assets/logo_1.png';

export const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,

  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  link: {
    color: '#3F51B5',
    fontWeight: 'bold',
  },
}));

export const Background = styled.div`
display: flex;
height:100%;
width:100%;
background-image: url(${BackGroundImg});
`;

export const logoImage = styled.div`
background-image: url(${logoImg});
`;

export const LogoContainer = styled.div`
align-items:center;
display:flex;
flex:1;
justify-content:center;
mar

img{
        min-width: 250px;
        width: 5vw;
    }
`;
