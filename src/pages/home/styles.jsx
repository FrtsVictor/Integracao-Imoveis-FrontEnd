import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const Container = styled.div`
align-items: center;
justify-content: center;
margin: 0 5vw;
display: flex;
flex:1;
flex-wrap:wrap;
`;

export const DivPagination = styled.div`
    margin: 3% 0 1.5% 0;
    display: flex;
    align-items: center;
 `;

export const CarouselDiv = styled.div`
margin-top: 5%;
display: flex;
`;

export const CardDiv = styled.div`
margin-bottom: 3%;
display: flex;
align-items: center;
flex-wrap: wrap;
gap: 10px;
width: 100%;
justify-content: center;

    button{
    border:none;
    background: none;
    color: white;

        &:hover{
            transform: scale(1.3);
        }
    }
`;

export const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
