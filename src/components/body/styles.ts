import styled from "styled-components";

export const Main = styled.main`
  max-width: 82%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 70px;

  @media (max-width: 768px) {
    gap: 20px;
    margin-top: 40px;
  }

  @media (max-width: 425px) {
    margin-top: 25px;
  }
    
`;

export const SmallCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }

  @media (max-width: 425px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;
