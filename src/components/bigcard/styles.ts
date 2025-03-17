import styled from "styled-components";

export const ContainerArticle = styled.article`
  display: flex;
  align-items: flex-start;
  background: #efebe0;
  color: #000000;
  border-radius: 5px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 1);
  padding: 15px;
  margin-top: 50px;
  cursor: pointer;

  &:hover {
    background: #f8f9fa;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 10px;
  }

  @media (max-width: 425px) {
    margin-top: 30px;
  }
`;

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  font-size: 0.875rem;
  line-height: 1.4;
  color: #555;

  @media (max-width: 768px) {
    font-size: 0.75rem;
  }
`;

export const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 4;
  margin-left: 15px;

  img {
    width: 100%;
    height: 450px;
    object-fit: cover;   
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;
    img {
      height: auto;
      width: 630px;
    }
  }
`;

export const ReadingTime = styled.span`
  font-family: "Tulasi", sans-serif;
  font-size: 14px;
  color: #888;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Title = styled.h2`
  font-family: "Tulasi", sans-serif;
  font-size: 20px;
  font-weight: bold;
  color: #333;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const Date = styled.span`
  font-family: "Tulasi", sans-serif;
  font-size: 14px;
  color: #777;
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

export const Content = styled.p`
  font-family: "Tulasi", sans-serif;
  font-size: 16px;
  line-height: 1.4;
  color: #555;
  margin: 0 0 15px 0;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 425px) {
    flex-wrap: wrap;
    justify-content: space-between;
    row-gap: 10px;
    margin-top: 15px;
  }
`;

export const TagButton = styled.button`
  background: #1f1f1e;
  color: #ffffff;
  font-size: 0.8rem;
  padding: 5px 10px;
  border: none;
  border-radius: 15px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: rgb(71, 71, 70);
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 4px 8px;
  }

  @media (max-width: 425px) {
    text-align: center;
  }
`;
