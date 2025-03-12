import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    max-width: 80%;
    height: 47px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    background-color: #1f1f1e;

    @media (max-width: 768px) {
        max-width: 100%; 
        justify-content: space-evenly; 
    }

    @media (max-width: 425px) {
        padding: 0 10px;
    }
`;

export const HeaderImg = styled.img`
    max-width: 32px;
    max-height: 32px;
    cursor: pointer;

`;

export const Wrapper = styled.div`
    background-color: #1f1f1e;
    width: 100%;
    height: 47px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
`;

export const Menu = styled.a`
    font-family: 'Core Sans Thin', sans-serif;
    font-style: normal;
    font-size: 14px;
    font-weight: bolder;
    line-height: 25px;
    color: #faebd7;
    margin-right: 20px;
    text-decoration: none;
    cursor: pointer;

    @media (max-width: 768px) {
        margin-right: 8px; 
    }

    @media (max-width: 425px) {
        font-size: 11px;
        margin-right: 10px;
    }
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-b#1f1f1e

    @media (max-width: 768px) {
        flex-wrap: wrap; 
        justify-content: center; 
    }
`;
