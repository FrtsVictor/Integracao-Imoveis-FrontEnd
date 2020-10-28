import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    font-family: 'Oxygen', sans-serif;

`;
export const Filter = styled.div`
    display: flex;
    flex-direction: column;
    width: 20%;
    border-right: 1px solid #ccc;
    margin: 10px;
    background-color:#F0F1F2;
    margin-top: -45px;
    align-items: center;

    h4{
        margin-top: 15px;
        margin-bottom: 5px;
    }

    label{
        margin-left: 5px;

    }
`;
export const InputType = styled.div`
    display: inline;
    flex-direction: column;
    margin-right:80px;
    




`;

export const Price = styled.div`
    display: flex;
    gap: 10px;
    input {
    width: 30%;


    }
`;
export const PriceActive = styled.div`
    display: flex;


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

        }

    }

`;

export const CardSection = styled.div`
    display:flex;
    flex-direction: column;
    width: 100%;

    a {
        text-decoration: none;
        color: black;

    }

    span {
        margin-top: 30px;
    }
`;

