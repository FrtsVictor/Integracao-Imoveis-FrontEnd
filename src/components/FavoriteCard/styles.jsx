import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
  root: {
    width: 345,
    backgroundColor: '#ece9e9',
  },
  media: {
    height: '40%',
    paddingTop: '50%', // 16:9
  },
  avatar: {
    backgroundColor: '#6e6d6d',
  },
}));

export const Container = styled.div`
    display: flex;
    flex:1;
    `;

export const Filter = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    border-right: 1px solid #ccc;
    margin: 10px;
 `;

export const CardDiv = styled.div`
display:flex;
`;

export const CardInfoIcons = styled.div`
display: flex;
justify-content:space-between;
align-items:center;
flex:1;
`;
