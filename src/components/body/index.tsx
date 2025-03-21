'use client';

import React, { useEffect, useState } from "react";
import { Main, SmallCardsContainer } from "./styles";
import { ArticleCarousel } from "../bigcard";
import { SmallCard } from "../smallcard";
import { api } from "@/lib/api";
import { News } from "@/@types/news";

const Body = () => {
  const [bigCardArticles, setBigCardArticles] = useState<News[]>([]); 
  const [smallCards, setSmallCards] = useState<News[]>([]); 

  useEffect(() => {
    const fetchCards = async () => {
      try {
      
        const bigCardData = await api.get<News[]>("/news", {
          params: {
            select: "*",
            order: "date.desc",
            limit: 4,
          },
        });

        const bigCardList = bigCardData.data || [];
        setBigCardArticles(bigCardList);

        const recentDate = bigCardList[0]?.date; 
        const smallCardsData = await api.get<News[]>("/news", {
          params: {
            select: "*",
            order: "date.desc",
            limit: 3,
            date: `lt.${recentDate}`, 
          },
        });

        setSmallCards(smallCardsData.data || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchCards();
  }, []);

  return (
    <Main>
      {bigCardArticles.length > 0 && <ArticleCarousel articles={bigCardArticles} />}

      <SmallCardsContainer>
        {smallCards.map((card) => (
          <SmallCard
            key={card.id}
            id={card.id}
            image={card.image_url}
            tags={card.tags.split(",")}
            date={card.date}
            title={card.title}
            readingTime={`${card.read_time}`}
            description={card.description}
          />
        ))}
      </SmallCardsContainer>
    </Main>
  );
};

export { Body };
