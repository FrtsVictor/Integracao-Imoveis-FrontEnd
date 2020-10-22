import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex:1;
    /* background-color:green; */
    `;

export const Filter = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    border-right: 1px solid #ccc;
    height:100%;
    background-color:grey;
 `;

export const CardContainer = styled.div`
display:flex;
/* background-color:red; */
margin: 1%;
flex-wrap:wrap;
align-items: center;
justify-content:center;
height:100%;
`;

export const CardDiv = styled.div`
display: flex;
width: 30%;
height: 70%;
padding: 1%;
`;
