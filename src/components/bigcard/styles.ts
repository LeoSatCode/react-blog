import styled from "styled-components";

export const ContainerArticle = styled.article`
  display: flex;
  align-items: flex-start;
  background: #efebe0;
  height: 482px;
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
    height: 570px;
  }
`;

export const CarouselContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  gap: 8px;
`;

export const Dot = styled.div<{ $isActive: boolean }>`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ $isActive }) => ($isActive ? "antiquewhite" : "#ccc")};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: antiquewhite;
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
  flex: 6;
  margin-left: 15px;

  img {
    width: 1200px;
    height: 450px;
    object-fit: cover;
    
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 20px;

    img {
      width: 700px;
      height: auto;
    }
  }

  @media (max-width: 425px) {
    img {
      width: 100%;
      height: auto;
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



export const FadeWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%; /* Mantém a altura total do wrapper */
  display: flex;
`;

export const FadeContent = styled.div<{ $isActive: boolean }>`
  flex: 1; /* Garante que todos os slides ocupem o mesmo espaço */
  opacity: ${({ $isActive }) => ($isActive ? 1 : 0)};
  transition: opacity 0.8s ease-in-out; /* Efeito de transição suave */
  visibility: ${({ $isActive }) => ($isActive ? "visible" : "hidden")};
  pointer-events: ${({ $isActive }) => ($isActive ? "all" : "none")};

  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
`;
