'use client';

import React, { useState, useEffect } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { SmallCard } from "@/components/smallcard";
import { Container, Grid } from "./styles";
import { News } from "@/@types/news";
import { api } from "@/lib/api";

const ClientTagPage = ({ tagName, articles }: { tagName: string; articles: News[] }) => {
  const [filteredArticles, setFilteredArticles] = useState<News[]>(articles);

  useEffect(() => {
    if (!tagName) return;

    const fetchArticlesByTag = async () => {
      try {
        const { data } = await api.get("/news", {
          params: { tags: `ilike.%${tagName}%`, select: "*", order: "date.desc" },
        });
        setFilteredArticles(data);
      } catch (error) {
        console.error("Erro ao buscar artigos por tag:", error);
      }
    };

    fetchArticlesByTag();
  }, [tagName]);

  if (!filteredArticles.length) {
    return <div>Carregando ou nenhum artigo encontrado...</div>;
  }

  return (
    <>
      <Header />
      <Container>
        <h1>Content related to: #{tagName}</h1>
        <Grid>
          {filteredArticles.map((article) => (
            <SmallCard
              key={article.id}
              id={article.id}
              image={article.image_url}
              tags={article.tags.split(",")}
              date={article.date}
              title={article.title}
              readingTime={`${article.read_time} min read`}
              description={article.description}
            />
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  );
};

export default ClientTagPage;
