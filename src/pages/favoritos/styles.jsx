import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex:1;
    min-width: 100%;
    min-height: 100%;
`;

export const Filter = styled.div`
    display: flex;
    margin-top: 20px;
    width: 20%;
    min-height: 100%;
    background-color: #0585e0;
    padding:15px;
`;

export const CardContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items: center;
    justify-content:center;
    gap:5px 5px 0 5px;
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

export const InputType = styled.div`
    margin-right:80px;
    margin-bottom:50px;
`;

export const SearchTitle = styled.div`
    display: flex;
    flex-direction:column;
`;

export const LineInput = styled.div`
    display: flex;
`;

export const FilterGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;

label{
    display:inline-block;
}

input{
    display:inline-block;
}

`;
