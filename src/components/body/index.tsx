"use client";

import React, { useEffect, useState } from "react";
import { Main, SmallCardsContainer } from "./styles";
import { Article } from "../bigcard";
import { SmallCard } from "../smallcard";
import { api } from "@/lib/api";
import { News } from "@/@types/news";

const Body = () => {
  const [smallCards, setSmallCards] = useState<News[]>([]);

  useEffect(() => {
    const fetchSmallCards = async () => {
      try {
        const { data } = await api.get<News[]>("/news", {
          params: {
            is_big_card: "eq.false",
            select: "*",
            limit: 3,
            order: "date.desc",
          },
        });

        if (data) {
          setSmallCards(data);
        } else {
          console.error("Nenhum SmallCard encontrado.");
        }
      } catch (error) {
        console.error("Erro ao buscar SmallCards:", error);
      }
    };

    fetchSmallCards();
  }, []);

  return (
    <Main>
      <Article />
      <SmallCardsContainer>
        {smallCards.map((card) => (
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
      </SmallCardsContainer>
    </Main>
  );
};

export { Body };
