import styled from 'styled-components';
import DefaultImg from '../../assets/casa1.jpg';

export const CardContainer = styled.div`
    margin-top: 30px;
    display: inline-flex;
    width: 37vw;
    height: 38vh;
    background-color:#ebebed;
    min-width: 380px;
    min-height: 150px;
    max-height: 400px;
    border-radius: 10px;
    border: 0.3px solid #cccccc;
    box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.6);

    &:hover{
        transform: scale(1.01);
    }
`;

export const DivImg = styled.div`
    display: flex;
    flex:1;
`;

export const Info = styled.div`
display:flex;
flex-direction: column;
flex:1;
`;

export const HouseImg = styled.img.attrs((props) => ({
  src: props.urlImagem || DefaultImg,
}))`
    width: 100%;
    height: 100%;
    transition: 0.3s;
    opacity: 1;
    border-radius: 10px 0 0px 10px;

    @media( max-height: 500px){
        height:90%
    }

    &&:hover{
        cursor: pointer;
        opacity: 0.6;
    }
  `;

export const Row = styled.div`
display:grid;
grid-gap: 2%;

`;

export const CardP = styled.p`
font-size: 1rem;
margin-left: 15px;
align-items: center;
display:flex;
`;

export const LineDiv = styled.div`
margin-top: 40px;
margin-left: -25px;
display: grid;
grid-template-columns: 1fr 1fr 1fr;
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
margin:5% 0;
display: grid;
grid-template-columns: 1fr 1fr;
margin-left: 15px;
`;

export const IconLeft = styled.div`
display:flex;
align-items:center;
`;

export const IconRight = styled.div`
display:flex;
align-items:center;
justify-content: flex-end;
margin-right: 15px;

&& button{
    display:flex;
    border-radius: 50px;
    align-items:center;
    border:none;

    &:hover{
        transform: scale(1.5);
    }
}

`;
