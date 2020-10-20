import styled from 'styled-components';
import DefaultImg from '../../assets/casa1.jpg';

export const CardContainer = styled.div`
    display: inline-flex;
    width: 43vw;
    height: 30vh;
    padding: 5px;
    background-color:#ebebed;
    box-sizing:border-box;
    min-width: 380px;
    min-height: 150px;
    max-height: 200px;
`;

export const HouseImg = styled.img.attrs((props) => ({
  src: props.urlImagem || DefaultImg,
}))`
    width: 50%;
    height: 100%;
    transition: 0.3s;
    opacity: 1;

    &&:hover{
        cursor: pointer;
        opacity: 0.6;
    }
  `;

export const DivImg = styled.div`
display: flex;
flex:1;
`;

export const CardP = styled.p`
font-size: 0.8rem;
margin-left: 15px;
align-items: center;
display:flex;
flex: 1;

`;

export const Info = styled.div`
display:flex;
flex-direction: column;
flex:1;
`;

export const LineDiv = styled.div`
display: flex;
justify-content:space-between;
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
margin-right: 5%;
margin-bottom: -20px;
`;
