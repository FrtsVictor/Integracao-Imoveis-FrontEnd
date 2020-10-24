import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex:1;
    `;

export const Filter = styled.div`
    display: flex;
    /* flex-direction: column; */
    width: 20%;
    border-right: 1px solid #000;
    height:100%;
    background-color:grey;
 `;

export const CardContainer = styled.div`
display:flex;
flex-wrap:wrap;
align-items: center;
justify-content:center;
height:100%;
`;

export const CardDiv = styled.div`
display: flex;
width: 30%;
height: 70%;
padding: 1% 0;
min-width: 300px;
`;

export const PageDiv = styled.div`
display: flex;
align-items:center;
justify-content:center;
`;
