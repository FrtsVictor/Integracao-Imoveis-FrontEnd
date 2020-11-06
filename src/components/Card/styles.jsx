import styled from 'styled-components';
import DefaultImg from '../../assets/casa1.jpg';

export const CardContainer = styled.div`
    display: flex;
    background-color:#f7f7ff;
    min-width: 380px;
    min-height: 200px;
    max-height: 180px;
    max-width: 630px;
    border-radius: 10px;
    border: 0.3px solid #cccccc;
    box-shadow: 0px 0px 15px 1px rgba(0,0,0,0.3);

    &:hover{
        transform: scale(1.01);
    }
`;

export const DivImg = styled.div`
    display: flex;
    max-height:100%;
    max-width: 500px;
    width: 60%;
`;

export const Info = styled.div`
    max-height: 200px;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    width: 40%;
    margin: 2%;
`;

export const HouseImg = styled.img.attrs((props) => ({
  src: props.urlImagem || DefaultImg,
}))`
    width: 100%;
    height: 100%;
    transition: 0.3s;
    opacity: 1;
    border-radius: 10px 0 0px 10px;

    &&:hover{
        cursor: pointer;
        opacity: 0.6;
    }
  `;

export const Row = styled.div`
display:flex;
flex-direction:column;

    div{
        display:flex;
        flex-wrap:wrap;
        margin-top:2px;
        align-items:center;
    }

`;

export const LineDiv = styled.div`
margin: 3% 0;
display: flex;
justify-content: space-between;
align-items: center;

    div{
        display:flex;
        align-items: center;
        width: 100%;
        margin:0;
    }

`;

export const FavIcon = styled.div`
display: flex;
align-items:center;
justify-content: space-between;

 button{
    display:flex;
    border-radius: 50px;
    border:none;

    &:hover{
        transform: scale(1.3);
    }
}
`;
