import { makeStyles } from '@material-ui/core';
import styled from 'styled-components';

export const useStyles = makeStyles({
  navbarDisplayFlex: {
    backgroundColor: '#0071C2',
    width: '100%',
    maxWidth: '100%',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  navListDisplayFlex: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  linkText: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: '#FFF',
  },
});

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
background-color: #0071C2;
width: 100%;
max-width: 100%;

    svg{
        margin-right: 5px;
    }

`;
