import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  box-shadow: 0 0 5px 0 gray;
  border-radius: 10px;
  overflow: hidden;
  background: url(${(props) => props.img});
  background-size: cover;
  height: 280px;
  width: 100%;
  max-width: 360px;
  min-width: 260px;
  box-shadow:  24px 20px 51px -21px #191D4D;

   :hover{
    transform: scale(1.02);
    transition: 0.4s;
  }
  > *{
    background: rgb(0,0,0, 0.5);
  }
`;

export const CardDescription = styled.div`
  display: flex;
  justify-content: space-between;
  width: 95%;
  color: white;
  padding: 10px;

svg{
    fill: ${(props) => (props.liked ? '#f35555' : 'white')};
}
button:hover{
    transition: 0.4s;
  }


`;

export const CardIcons = styled.div`
  background: rgb(0,0,0, 0.5);
  padding: 10px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  color: white;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

`;

export const ModalDiv = styled.div`
display: flex;
height:100%;
width:100%;
background-color: none;
background: none;

 &:hover{
     cursor: pointer;
 }

`;
