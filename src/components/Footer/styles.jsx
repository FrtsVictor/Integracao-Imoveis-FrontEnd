import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    justify-content: flex-end;
    font-family: 'Oxygen', sans-serif;
    /* position: absolute; */
    /* bottom: 0; */
    /* left: 0; */
    width: 100%;
    height: 140px;
    max-height: 215px;
    background: radial-gradient(circle, #526cff 0%, #253D71 100%);

    h5{
        text-align:center;
        color:#fff;
        font-size:20px;
    }

`;

export const IconsDiv = styled.div`
  padding: 5px 0;
  list-style-type: none;
  align-items:center;
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const Link = styled.a`
  color: #fff;
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
