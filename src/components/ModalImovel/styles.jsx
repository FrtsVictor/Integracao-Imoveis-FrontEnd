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
    background-color:#FFF;
    border: 2px solid #000;
    flex-wrap: wrap;
    /* flex:1; */
    /* align-items: center; */
    /* justify-content: center; */
    /* margin:auto; */
    /* flex-direction: column; */
`;

export const ContainerUp = styled.div`
width: 100%;
height: 70%;
display: flex;
padding: 5%;
/* background-color: blue; */
`;

export const ContainerDown = styled.div`
width: 100%;
height: 30%;
display: flex;
flex-wrap:wrap;
/* flex-direction: column; */
padding-bottom: 5%;
/* background-color: brown; */
`;

export const RightMenuContainer = styled.div`
/* display: flex; */
width:30%;
/* flex-direction: column; */
align-items: flex-end;
/* background-color: red; */
/* border: 1px solid black; */
display:grid;
margin-left: 5%;
/* altura de cada linha */
grid-template-columns: 1fr;
background-color: #eaeaea;


`;

export const MenuText = styled.p`
align-items:flex-start;
justify-content: flex-start;
display:flex;
/* font-weight: 700; */
/* background-color: #e2efee; */
/* color:red; */
flex:1;
/* background-color:#fcfcfc2b; */
`;

export const CarouselContainer = styled.div`
display : flex;
flex:1;
width: 70%;
height: 90%;
border: 1px solid black;
background-color: purple;
`;

// Carousel
export const HouseImg = styled.img.attrs((props) => ({
  src: props.urlImagem || NoImage,
}))`
    width: 100%;
    height: 100%;
`;

// House Bottom Info
export const HouseIcons = styled.div`
display: flex;
flex-direction:row;
width: 100%;
height: 50%;
/* background-color: green; */
align-items: center;
justify-content:center;

`;

export const HouseDetails = styled.div`
display:flex;
width:100%;
flex-wrap: wrap;
height: 50%;
flex-direction: row;
align-items: center;
justify-content:center;
/* background-color: orange; */
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
