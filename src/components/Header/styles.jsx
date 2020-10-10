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
    justify-content: space-between;

}


li{
    font-size: 17px;
    margin: 20px;

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
    border-radius:4px;
    box-shadow: 1px 1px 2px #adadad;
    background: #cccccc;
    border:1px solid #000000;
    width:500px;
    height: 30px;
    margin-top: 38px;
    transition: 0.3s;
}
input[type=text]:hover{
    background: #e1e1e8;
    border:1px solid #006699;
}

`;
