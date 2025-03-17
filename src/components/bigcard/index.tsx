'use client';

import React, { useEffect, useState } from "react";
import {
  ContainerArticle,
  TextContent,
  ImageContent,
  Date,
  Title,
  ReadingTime,
  Content,
  TagsContainer,
  TagButton,
} from "./styles";
import Image from "next/image";
import Link from "next/link";
import { api } from "@/lib/api";
import { News } from "@/@types/news";

const Article = () => {
  const [article, setArticle] = useState<News | null>(null);

  useEffect(() => {
    const fetchBigCard = async () => {
      try {
        const { data } = await api.get<News[]>("/news", {
          params: {
            select: "*",
            is_big_card: "eq.true",
          },
        });

        if (data && data.length > 0) {
          setArticle(data[0]);
        } else {
          console.error("Nenhum BigCard encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar BigCard:", error);
      }
    };

    fetchBigCard();
  }, []);

  if (!article) {
    return <div>Carregando...</div>;
  }

  return (
    <ContainerArticle>
      <TextContent>
        <Date>{article.date}</Date>
        <Link href={`/materia/${article.id}`}>
          <Title>{article.title}</Title>
        </Link>
        <ReadingTime>{article.read_time}</ReadingTime>
        <Content>{article.description}</Content>
        <TagsContainer>
          {article.tags.split(",").map((tag, index) => (
            <TagButton key={index}>{tag.trim()}</TagButton>
          ))}
        </TagsContainer>
      </TextContent>
      <ImageContent>
        <Image src={article.image_url} alt={article.title} width={400} height={250} />
      </ImageContent>
    </ContainerArticle>
  );
};

export { Article };
