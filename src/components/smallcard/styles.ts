import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: #efebe0;
  border: 1px solid #888;
  border-radius: 5px;
  padding: 15px;
  margin-top: 80px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  gap: 10px;
  cursor: pointer;

  &:hover {
    background: #f8f9fa;
    box-shadow: 0px 6px 8px rgba(0, 0, 0, 0.2);
  }

  @media (max-width: 768px) {
    font-family: "Tulasi", sans-serif;
    padding: 10px;
    margin-top: 20px;
  }

  @media (max-width: 425px) {
    padding: 8px;
    margin-top: 25px;
  }

  @media (max-width: 375px) {
    padding: 8px;
    margin-top: 90px;
  }

  @media (max-width: 320px) {
    padding: 8px;
    margin-top: 60px;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    height: 150px;
  }

  @media (max-width: 425px) {
    height: 120px;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const TagButton = styled.button`
  font-family: "Inter", sans-serif;
  background: #1f1f1e;
  color: #ffffff;
  font-size: 0.75rem;
  padding: 4px 8px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #555555;
  }

  @media (max-width: 425px) {
    font-size: 0.7rem;
    padding: 3px 6px;
  }
`;

export const Date = styled.span`
  font-family: "Tulasi", sans-serif;
  font-size: 0.8rem;
  color: #888;

  @media (max-width: 425px) {
    font-size: 0.75rem;
  }
`;

export const Title = styled.h3`
  font-family: "Tulasi", sans-serif;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 425px) {
    font-size: 0.85rem;
  }
`;

export const ReadingTime = styled.span`
  font-family: "Tulasi", sans-serif;
  font-size: 0.8rem;
  color: #888;

  @media (max-width: 425px) {
    font-size: 0.75rem;
  }
`;

export const Description = styled.p`
  font-family: "Tulasi", sans-serif;
  font-size: 0.875rem;
  line-height: 1.4;
  color: #555;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }

  @media (max-width: 425px) {
    font-size: 0.75rem;
  }
`;
