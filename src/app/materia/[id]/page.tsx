'use client';

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
import { useParams } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SmallCard } from "@/components/smallcard";
import Image from "next/image";
import { api } from "@/lib/api";
import { News } from "@/@types/news";

const MateriaPage = () => {
  const params = useParams();
  const [article, setArticle] = useState<News | null>(null);
  const [relatedCards, setRelatedCards] = useState<News[]>([]);
  const [bigCard, setBigCard] = useState<News | null>(null); 
  useEffect(() => {
    const id = params?.id;
    console.log("ID capturado pelos parâmetros da rota:", id);

    if (!id) return;

    const fetchArticle = async () => {
      try {
        const { data } = await api.get<News[]>("/news", {
          params: {
            id: `eq.${id}`,
            select: "*",
          },
        });

        if (data && data.length > 0) {
          console.log("Dados do artigo:", data[0]);
          setArticle(data[0]);
        } else {
          console.error("Artigo não encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar o artigo:", error);
      }
    };

   
    const fetchBigCard = async () => {
      try {
        const { data } = await api.get<News[]>("/news", {
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
        const { data } = await api.get<News[]>("/news", {
          params: {
            id: `neq.${params.id}`, 
            select: "*",
            order: "date.desc",
            limit: 3,
          },
        });
    
        if (data) {
          console.log("Dados dos SmallCards relacionados:", data);
          setRelatedCards(data); 
        }
      } catch (error) {
        console.error("Erro ao buscar SmallCards relacionados:", error);
      }
    };
    

    fetchArticle();
    fetchBigCard();
    fetchRelatedCards();
  }, [params]);

  if (!article) {
    return <div>Carregando...</div>;
  }

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

export default MateriaPage;
