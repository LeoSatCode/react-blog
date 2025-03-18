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
    flex-direction: column;
    align-items: center;
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

export const SearchInputContainer = styled.div`
  width: 230px;
  height: 35px;
  background: #2d2d37;
  border-radius: 8px;
  padding: 0 5px;
  margin: 0 50px;
  display: flex;
  align-items: center;

  &:hover {
    background: #888888;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 10px 0;
  }
`;

export const Input = styled.input`
  font-family: "Core Sans Thin", sans-serif;
  font-weight: bold;
  background: transparent;
  flex: 1;
  border: none;
  color: #faebd7;
  outline: none; 
  padding: 5px;
`;

export const SearchButton = styled.button`
  background: #555555;
  color: #ffffff;
  border: none;
  padding: 5.5px 10px;
  position: absolute;
  margin-left: 270px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #888888;
  }

  @media (max-width: 768px) {
    padding: 5.5px;
    margin-left: 190px;
  }
`;

export const Wrapper = styled.div`
  background-color: #1f1f1e;
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const Menu = styled.a`
  font-family: "Core Sans Thin", sans-serif;
  font-size: 14px;
  font-weight: bolder;
  line-height: 25px;
  color: #faebd7;
  margin-right: 20px;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    scale: 1.15;
  }

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
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 10px;
  }
`;
