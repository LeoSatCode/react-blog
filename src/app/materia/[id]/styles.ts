
import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 50px auto 0 180px; 
  max-width: 1640px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column; 
    margin: 20px auto;
    padding: 0 10px;
  }

  @media (max-width: 425px) {
    margin: 10px auto;
    padding: 0 5px; 
  }
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column; 
    gap: 15px;
  }
`;

export const MateriaContainer = styled.div`
  margin-right: 20px;
  padding: 20px;

  @media (max-width: 768px) {
    margin-right: 0; 
  }
`;

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: auto;
  margin-top: 45px;
  padding: 40px;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%; 
    margin-top: 20px;
    padding: 10px;
  }

  position: sticky; 
  top: 100px;
`;

export const Title = styled.h1`
  font-family: 'Tulasi', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 10px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.5rem; 
  }

  @media (max-width: 425px) {
    font-size: 1.25rem;
  }
`;

export const Description = styled.p`
  font-family: 'Tulasi', sans-serif;
  font-size: 1.125rem;
  color: #555;
  margin-bottom: 15px;
  font-style: italic;

  @media (max-width: 768px) {
    font-size: 1rem; 
  }

  @media (max-width: 425px) {
    font-size: 0.9rem;
  }
`;

export const Date = styled.span`
  font-family: 'Tulasi', sans-serif;
  display: block;
  font-size: 0.875rem;
  color: #888;
  margin-bottom: 20px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
`;

export const ContentParagraph = styled.p`
  font-family: 'Tulasi', sans-serif;
  font-size: 1rem;
  line-height: 1.8;
  color: #555;
  text-align: justify;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 425px) {
    font-size: 0.8rem;
  }
`;

export const Signature = styled.p`
  font-family: 'Tulasi', sans-serif;
  font-size: 1rem;
  line-height: 1.8;
  color: #555;
  text-align: justify;
  margin-top: 150px;

  @media (max-width: 768px) {
    margin-top: 100px;
    font-size: 0.9rem;
  }

  @media (max-width: 425px) {
    margin-top: 80px;
    font-size: 0.8rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: auto;
  width: 100%;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 0.9rem;
  }

  @media (max-width: 425px) {
    padding: 5px;
    font-size: 0.8rem;
  }
`;
