import styled from 'styled-components';

export const Title = styled.div`
font-size: 30px;
display: flex;
margin-left: 50px;
justify-content:flex-start;
`;

export const Container = styled.div`
display: flex;
justify-content: space-between;
align-items: baseline;
margin-bottom: 30px;

ul {
    list-style: none;
    display:flex;
}

li{
    font-size: 17px;
    margin-left: 15px;
}

a{
    text-decoration: none;
    color: #000;

    &:hover{
    color: #93c6f9;
    }
}

span{
    cursor: pointer;

    &:hover{
        color:#93c6f9;
    }
}

`;
