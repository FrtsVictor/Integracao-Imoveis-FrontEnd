import styled from 'styled-components';

export const Title = styled.div`
    font-size: 30px;
    display: flex;
    align-items:center;
    /* margin-left: 50px;
    justify-content:flex-start; */
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    border-bottom: 1px solid #ccc;
    min-width:200px;
    width:100%;

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
form{
    display: flex;

}

input {
    padding: 10px;
    margin-left: 200px;
    width: 500px;
    height: 40px;
    border-radius: 5px 0px 0px 5px;
    border: 1px solid #ced3d4;
    color: #333;
    margin-top:50px;
    margin-left:50px;
}

button{
    width: 50px;
    height: 40px;
    background-color: #fff;
    color: black;
    border: 1px solid #ced3d4;
    border-left: none;
    border-radius: 0px 5px 5px 0px;
    background-color: #ced3d4;
    transition:0.3s;
    margin-top:50px;
    margin-right:50px;

        &:hover {
            opacity: .75;


}
`;
