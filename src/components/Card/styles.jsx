import styled from 'styled-components';
import Myimg from '../../assets/casa1.jpg';

export const CardContainer = styled.div`
    margin-top: 60px;
    display: flex;
    width: 50vw;
    height: 30vh;
    padding: 5px;
    background-color:#ebebed;

    && ::hover{
        cursor: pointer;
    }
`;

export const HouseImg = styled.img.attrs((props) => ({
  src: props.urlImagem || Myimg,
}))`
    width: 50%;
    height: 100%;
  `;

export const DivImg = styled.div`
display: flex;
flex-direction: row;
height: 50%;
width: 50%;
background-color: black;
align-self: flex-start;
`;

export const CardP = styled.p`
font-size: 0.8rem;
margin-left: 15px;
width:100%;
display:flex;
flex: 1;
`;

export const PContainer = styled.div`
display:flex;
background-color: red;
border: 1px solid black;
height: 20px;
flex: 1;
`;

export const Info = styled.div`
display:flex;
flex-direction: column;
flex: 1;
`;

export const LineDiv = styled.div`
display: flex;
width:100%;

`;

export const IconDiv = styled.div`
display:flex;
flex-direction:column;
align-items: center;
width: 100%;
margin-bottom: 3vh;
`;

export const FavIcon = styled.div`
display: flex;
justify-content: flex-end;
`;
