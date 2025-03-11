import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  align-items: center; 
  margin: 80px 0 0 165px;

  @media (max-width: 768px) {
    margin: 50px 0 0 20px;
    flex-direction: column; 
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 30px;

  @media (max-width: 768px) {
    margin-left: 0;
    align-items: center; 
  }
`;

export const ContainerTitle = styled.div`
  h1 {
    font-family: 'Core Sans', sans-serif;
    font-size: 120px;
    font-weight: bolder;
    color: #faebd7;
    margin: 0;

    @media (max-width: 1024px) {
      font-size: 70px;
      text-align: center;
    }

    @media (max-width: 768px) {
      font-size: 80px; 
      text-align: center;
    }

    @media (max-width: 425px) {
      font-size: 60px; 
    }

    @media (max-width: 375px) {
      font-size: 50px; 
    }

    @media (max-width: 320px) {
      font-size: 40px; 
    }
  }
`;

export const ContainerText = styled.div`
  p {
    font-family: 'Core Sans', sans-serif;
    font-size: 22px;
    font-weight: normal;
    color: #b9b0b0;
    margin: 0;
    width: 200px; 

    @media (max-width: 1024px) {
      font-size: 16px;
      text-align: center;
    }

    @media (max-width: 768px) {
      font-size: 18px;
      text-align: center;
    }

    @media (max-width: 425px) {
      font-size: 16px;
    }

    @media (max-width: 375px) {
      font-size: 14px; 
    }

    @media (max-width: 320px) {
      font-size: 12px;
    }
  }
`;
