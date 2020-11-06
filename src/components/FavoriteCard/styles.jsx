import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  media: {
    backgroundSize: 'cover',
    height: '40%',
    paddingTop: '50%',
  },
  avatar: {
    backgroundColor: '#0071C2',
  },
}));

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin-top:15px;
    box-shadow: 0 0 5px 0 gray;
    border-radius: 10px;
    overflow: hidden;
    background: url(${(props) => props.img});
    background-size: cover;
    height: 280px;
    width: 100%;
    max-width: 360px;
    min-width: 260px;
    box-shadow:  24px 20px 51px -21px #191D4D;

    :hover{
        transform: scale(1.02);
        transition: 0.4s;
    }
  > *{
    background: rgb(0,0,0, 0.2);
  }
`;

export const CardInfoIcons = styled.div`
    display: flex;
    justify-content:space-between;
    align-items:center;
    flex:1;
`;
