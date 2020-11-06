import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';

export const Container = styled.div`
    margin-top:20px;
    display: flex;
    font-family: 'Oxygen', sans-serif;
    min-height:100%;
    min-width: 100%;
    height:100%;
    width:100%;
`;

export const Filter = styled.div`
    display: flex;
    flex-wrap:wrap;
    flex-direction: column;
    width: 20%;
    max-width: 300px;
    border-right: 1px solid #ccc;
    margin-right: 10px;
    background-color:#0071C2 ;
    opacity: 0.8;
    align-items: flex-start;
    height:80%;

    h2{
        text-align:center;
        margin: 25px 5px;
        font-size:1.9rem;
    }

    h3{
        text-align:center;
        margin: 25px 5px;
        font-size:1.2rem;
    }
`;

export const InputType = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    margin-left:10px;
    margin-bottom:50px;

    div{
        display: flex;
        flex-wrap: wrap;

        label{
            margin-left:13px;
            font-size:20px;
        }
    }


`;

export const Price = styled.div`
    display: flex;
    padding:7px;
    gap: 5px;

        input {
        font-size:12px;
        font-family:'Oxygen', sans-serif ;
        font-weight:bold;
        width: 30%;
        cursor: pointer;
    }
`;

export const PriceActive = styled.div`
    display: flex;
    cursor: pointer;

    div {
        margin-left: auto;
        margin-right: 5px;
        display: flex;

        :hover {
            cursor: pointer;
        }

        span{
            margin-top: 2px;
            font-size: 12px;
            margin-left:17px;
            font-weight:bold;
        }
    }

`;

export const CardSection = styled.div`
    display: flex;
    align-items:center;
    flex-wrap: wrap;
    gap: 10px;
    max-width: 70%;
    height: 100%;
`;

export const DivPagination = styled.div`
    margin-top: 25px;
    margin-bottom:20px;
    display: flex;
    align-items: center;
    justify-content:center;
 `;

export const useStyles = makeStyles((theme) => ({
  root: {
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));
