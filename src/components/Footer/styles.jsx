import styled from 'styled-components';

export const Container = styled.div`
  border-top: 1px solid #333;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 20px 10px;
  background: radial-gradient(circle, #526cff 0%, #0b2fff 100%);
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;

export const Wrapper = styled.div`
    align-items:center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;


    h5{
        text-align:center;
        color:#fff;
        font-size:20px;
    }

`;

export const ColumnIcon = styled.div`
  padding:20px;
  list-style-type: none;
  align-items:center;
  display: flex;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  grid-gap: 10px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Link = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
  &:hover {
      color: #072072;
      transition: 100ms ease-in;
  }
`;

export const TeamDiv = styled.p`
  border-top: 1px solid #072072;
  padding:10px;
  font-size: 15px;
  color: #fff;
  margin-top:10px;

`;
