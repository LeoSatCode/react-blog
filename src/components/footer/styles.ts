import styled from "styled-components";

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  padding: 20px;
  background-color: #1f1f1e;
  color: #ffffff;
  gap: 10px;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 50px;
    padding: 15px;
    gap: 8px;
  }

  @media (max-width: 425px) {
    margin-top: 30px;
    padding: 10px;
    gap: 5px;
  }
`;

export const FooterText = styled.p`
  font-size: 0.875rem;
  margin: 0;

  span {
    color: #f25c54;
  }

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 425px) {
    font-size: 0.75rem;
  }
`;
