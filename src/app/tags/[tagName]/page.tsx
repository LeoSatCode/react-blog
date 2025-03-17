'use client';

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { SmallCard } from '@/components/smallcard';
import { api } from '@/lib/api'; 
import { News } from '@/@types/news'; 
import { Container, Grid } from './styles'

const TagPage = () => {
  const { tagName } = useParams(); 
  const [articles, setArticles] = useState<News[]>([]);

  useEffect(() => {
    if (!tagName) return;

    const fetchArticlesByTag = async () => {
      try {
        const { data } = await api.get<News[]>('/news', {
          params: {
            tags: `ilike.%${tagName}%`, 
            select: '*',
            order: 'date.desc',
          },
        });

        if (data) {
          setArticles(data);
        } else {
          console.error('Nenhum artigo encontrado para essa tag.');
        }
      } catch (error) {
        console.error('Erro ao buscar artigos por tag:', error);
      }
    };

    fetchArticlesByTag();
  }, [tagName]);

  if (!articles.length) {
    return <div>Carregando ou nenhum artigo encontrado...</div>;
  }

  return (
    <>
      <Header />
      <Container>
        <h1>Content related to : #{tagName}</h1>
        <Grid>
          {articles.map((article) => (
            <SmallCard
              key={article.id}
              id={article.id}
              image={article.image_url}
              tags={article.tags.split(',')}
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

export default TagPage;
