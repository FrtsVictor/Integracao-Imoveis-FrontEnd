import styled from 'styled-components';

export default styled.div`
display: flex;
flex:1;
max-width: 90vw;
max-height: 60vh;
margin: 0 auto;
`;

export const HouseImg = styled.img.attrs((props) => ({
  src: props.urlImagem,
}))`
      width: 90vw;
      height: 80vh;
    `;
