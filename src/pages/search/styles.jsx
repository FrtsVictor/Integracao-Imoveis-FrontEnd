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

    h2{
        margin: 25px 5px;
        font-size:1.9rem;
    }
    h3{
        margin: 25px 5px;
        font-size:1.2rem;

    }

       label{
        font-size:20px;
        font-style:italic;
        margin:5px;

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
    gap: 10px;

        input {
        font-size:12px;
        font-family: 'IBM Plex Mono', monospace;
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

