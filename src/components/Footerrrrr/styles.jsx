import styled from 'styled-components';
import Logo from '../../assets/logo_1.png';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: #cdcdcd;
    align-items: center;
    height:8%;
`;

export const LogoContainer = styled.div`
display:flex;
flex:1;
height: 100%;
`;

export const LogoImg = styled.img.attrs(() => ({
  src: Logo,
}))`
width: 30%;
height: 100%;
`;

export const TextContainer = styled.div`
display:flex;
flex:2;
align-items:center;
justify-content:center;

&& p{
    font-size: 17px;
}
`;

export const IconsContainer = styled.div`
display: flex;
flex:1;
justify-content:flex-end;
margin-right: 1%;

.fa {
    font-size: 30px;
    text-decoration: none;
    color: #000;
    margin-right: 15px;
  }

  .fa:hover {
      opacity: 0.7;
  }
`;
