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
background-color: gray;

margin-bottom: 30px;
img{
        position:flex;
        justify-content:flex-start;
        width: 250px;
        margin-bottom:-4px;

}

ul {
    list-style: none;
    display:flex;
    margin-top: 40px;

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
input {
    display: flex;
    width: 550px;
    height: 30px;
    margin-top: 38px;
}

`;
