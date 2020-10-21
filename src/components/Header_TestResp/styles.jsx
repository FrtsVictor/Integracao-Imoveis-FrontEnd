import styled from 'styled-components';

export const Title = styled.div`
    font-size: 30px;
    display: flex;
    align-items:center;
    /* margin-left: 50px; */
    /* justify-content:flex-start; */
`;

export const Container = styled.div`
    display: flex;
    height: 22vh;
    flex-wrap:wrap;
    /* justify-content: space-between; */
    margin-bottom: 30px;
    border-bottom: 1px solid #efefef;
`;

export const LinksContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex:1;
font-size: 17px;

ul {
    list-style: none;
    display:flex;
    align-items:center;
    height:100%;
}

li{}

li{
    margin-left:10px;
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
    /* display: flex; */

}

`;

export const LogoContainer = styled.div`
align-content:center;
display:flex;
flex:1;
margin-left:50px;



img{
        /* position:flex; */
        justify-content:flex-start;
        min-width: 250px;
        width: 10vw;
        margin-bottom:-20px;

    }
`;

export const SearchContainer = styled.div`
display:flex;
justify-content:center;
align-items:center;
flex: 2;

input {
    border-radius:4px;
    box-shadow: 1px 1px 2px #efefef;
    background: #efefef;
    border:1px solid #000000;
    height: 40px;
    width: 300px;
    transition: 0.3s;
    font-style:italic;

}

/* input[type=text]:hover{

    width:100%;
    background: #e1e1e8;
    border:1px solid #006699;

} */

button{
    background-color:orange;
    border-radius:4px;
    box-shadow: 1px 1px 2px #efefef;
    background: #efefef;
    border:1px solid #000000;
    width:40px;
    height: 40px;
    transition: 0.3s;
        :hover{
        background: #efefef;
        border:1px solid #006699;
        }
    }

`;
