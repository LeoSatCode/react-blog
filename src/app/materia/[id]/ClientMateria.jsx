"use client";

import React, { useEffect, useState } from "react";
import {
  LayoutContainer,
  MateriaContainer,
  SidebarContainer,
  Title,
  Description,
  Date,
  ImageContainer,
  ContentParagraph,
  Row,
  Signature,
} from "./styles";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SmallCard } from "@/components/smallcard";
import Image from "next/image";
import { api } from "@/lib/api";

const ClientMateria = ({ article, articleId }) => {
  const [relatedCards, setRelatedCards] = useState([]);
  const [bigCard, setBigCard] = useState(null);

  useEffect(() => {
    const fetchBigCard = async () => {
      try {
        const { data } = await api.get("/news", {
          params: {
            is_big_card: "eq.true",
          },
        });

        if (data && data.length > 0) {
          setBigCard(data[0]);
        }
      } catch (error) {
        console.error("Erro ao buscar o BigCard:", error);
      }
    };

    const fetchRelatedCards = async () => {
      try {
        const { data } = await api.get("/news", {
          params: {
            id: `neq.${articleId}`,
            select: "*",
            order: "date.desc",
            limit: 3,
          },
        });

        if (data) {
          setRelatedCards(data);
        }
      } catch (error) {
        console.error("Erro ao buscar SmallCards relacionados:", error);
      }
    };

    fetchBigCard();
    fetchRelatedCards();
  }, [articleId]);

  return (
    <>
      <Header />
      <Row>
        <LayoutContainer>
          <MateriaContainer>
            <Title>{article.title}</Title>
            <Description>{article.description}</Description>
            <Date>{article.date}</Date>
            <ImageContainer>
              <Image src={article.image_url} alt={article.title} width={800} height={400} />
            </ImageContainer>
            {article.content
              .trim()
              .split("\n")
              .filter((paragraph) => paragraph.trim() !== "")
              .map((paragraph, index) => (
                <ContentParagraph key={index}>{paragraph}</ContentParagraph>
              ))}
            <Signature>Written by Leonardo Saturnino</Signature>
          </MateriaContainer>
          <SidebarContainer>
            {bigCard && bigCard.id !== article.id && (
              <SmallCard
                key={bigCard.id}
                id={bigCard.id}
                image={bigCard.image_url}
                tags={bigCard.tags.split(",")}
                date={bigCard.date}
                title={bigCard.title}
                readingTime={`${bigCard.read_time} min read`}
                description={bigCard.description}
              />
            )}
            {relatedCards
              .filter((card) => card.id !== bigCard?.id)
              .slice(0, 3 - (bigCard && bigCard.id !== article.id ? 1 : 0))
              .map((card) => (
                <SmallCard
                  key={card.id}
                  id={card.id}
                  image={card.image_url}
                  tags={card.tags.split(",")}
                  date={card.date}
                  title={card.title}
                  readingTime={`${card.read_time} min read`}
                  description={card.description}
                />
              ))}
          </SidebarContainer>
        </LayoutContainer>
      </Row>
      <Footer />
    </>
  );
};

export default ClientMateria;
