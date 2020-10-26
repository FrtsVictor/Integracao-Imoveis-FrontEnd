import styled from 'styled-components';

import NoImage from '../../assets/no_img.png';

// Containers

export const Container = styled.div`
display: flex;
align-items: center;
justify-content: center;
`;

export const PapperContainer = styled.div`
    display: flex;
    width: 80vw;
    height: 90vh;
    border-radius: 10px;
    flex-wrap: wrap;
    margin:  30px;
    color:#03020c;
    background-color: #c5cdd8;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 500ms;
    margin-left:150px;
    border-right:1px solid black;

`;

export const ContainerUp = styled.div`
width: 100%;
height: 70%;
display: flex;
padding: 5%;
`;

export const ContainerDown = styled.div`
width: 100%;
height: 30%;
display: flex;
flex-wrap:wrap;
padding-bottom: 5%;
`;

export const RightMenuContainer = styled.div`
width:30%;
align-items: flex-end;
display:grid;
margin-left: 5%;
margin-bottom:50px;
margin-top:22px;
grid-template-columns: 1fr;
box-shadow: 5px 10px 8px #888888;
font-style:italic;
font-weight: 400;



`;

export const FavIcon = styled.div`
display: flex;
justify-content: flex-end;
margin-right: 5%;
margin-bottom: -20px;
`;

export const MenuText = styled.p`
align-items:flex-start;
justify-content: flex-start;
display:flex;
flex:1;
`;

export const CarouselContainer = styled.div`
display : flex;
flex:1;
width: 70%;
height: 90%;

&& div{
    background-color:  #c5cdd8;
}

`;

// Carousel
export const HouseImg = styled.img.attrs((props) => ({
  src: props.urlImagem || NoImage,
}))`
    margin-left:140px;
    width: 60%;
    height: 60%;

`;

// House Bottom Info
export const HouseIcons = styled.div`
display: flex;
flex-direction:row;
width: 100%;
height: 40%;
align-items: center;
justify-content:center;


`;

export const HouseDetails = styled.div`
@import url('https://fonts.googleapis.com/css?family=Josefin+Sans');
display:flex;
width:100%;
flex-wrap: wrap;
height: 50%;
flex-direction: row;
align-items: center;
justify-content:center;
font-family: 'Josefin Sans', cursive;

`;
export const DivIcons = styled.div`
display: flex;
flex-direction: row;
justify-content:space-between;
`;

export const InfoP = styled.p`
font-size: 1rem;
justify-content: center;
display:flex;
width:10%;
`;

export const IconInfo = styled.div`
display:flex;
flex-direction:column;
align-items: center;
width: 100%;
margin-bottom: 3vh;
`;
