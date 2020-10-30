import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    font-family: 'Oxygen', sans-serif;
    height:450px;
    margin-bottom:70%;

`;
export const Filter = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    border-right: 1px solid #ccc;
    margin: 10px;
    background-color:#0071C2 ;
    margin-top: -45px;
    align-items: center;
    margin-top:-20px;

    h2{
        margin: 25px 5px;
        font-size:1.9rem;

    }
    h3{
        margin: 25px 5px;
        font-size:1.2rem;

    }

       label{
        margin-left:13px;
        font-size:20px;


    }
`;
export const InputType = styled.div`
    display: inline;
    flex-direction: column;
    margin-right:80px;
    margin-bottom:50px;


`;

export const Price = styled.div`
    display: flex;
    padding:7px;
    gap: 5px;

        input {
        font-size:12px;
        font-family:'Oxygen', sans-serif ;
        font-weight:bold;
        width: 30%;
        cursor: pointer;

    }
`;
export const PriceActive = styled.div`
    display: flex;
    cursor: pointer;


    div {
        margin-left: auto;
        margin-right: 5px;
        display: flex;
        :hover{
            cursor: pointer;
        }


        span{
            margin-top: 2px;
            font-size: 12px;
            margin-left:17px;
            font-weight:bold;


        }

    }

`;

export const CardSection = styled.div`
    display: grid;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;
    grid-gap: 1%;
    width: 80%;
    height:50%;
    margin-top:-50px;

    a {
        text-decoration: none;
        color: black;

    }

    span {
        margin-top: 30px;
    }
`;

