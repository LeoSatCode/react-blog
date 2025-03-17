'use client';

import React, { useEffect, useState } from "react";
import { Main, SmallCardsContainer } from "./styles";
import { Article } from "../bigcard";
import { SmallCard } from "../smallcard";
import { api } from "@/lib/api";
import { News } from "@/@types/news";

const shuffleEqualDates = (articles: News[]) => {
  return articles.sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();

    if (dateA !== dateB) {
      return dateB - dateA; // Ordena por data mais recente
    }
    return Math.random() - 0.5; // Embaralha caso as datas sejam iguais
  });
};

const Body = () => {
  const [bigCard, setBigCard] = useState<News | null>(null); // Estado do BigCard
  const [smallCards, setSmallCards] = useState<News[]>([]); // Estado dos SmallCards

  useEffect(() => {
    const fetchCards = async () => {
      try {
        // Busca o BigCard
        const bigCardData = await api.get<News[]>("/news", {
          params: {
            is_big_card: "eq.true",
            select: "*",
            limit: 1,
          },
        });

        let currentBigCard =
          bigCardData.data && bigCardData.data.length > 0 ? bigCardData.data[0] : null;

        // Busca os SmallCards
        const smallCardsData = await api.get<News[]>("/news", {
          params: {
            is_big_card: "eq.false",
            select: "*",
            limit: 3,
            order: "date.desc",
          },
        });

        let smallCardsList = smallCardsData.data || [];

        // Obtem todos os artigos com mesma data
        const matchingCards = smallCardsList.filter(
          (card) =>
            currentBigCard &&
            new Date(card.date).getTime() === new Date(currentBigCard.date).getTime()
        );

        const shouldSwap = localStorage.getItem("shouldSwap") === "true";

        if (currentBigCard && matchingCards.length > 0 && shouldSwap) {
          // Recupera o índice atual de rotação ou inicia com 0
          const storedIndex = localStorage.getItem("rotationIndex");
          const rotationIndex = storedIndex ? Number(storedIndex) : 0;

          // Promove o próximo card do ciclo
          const promotedCard = matchingCards[rotationIndex];

          // Calcula o próximo índice de rotação e salva no localStorage
          const nextIndex = (rotationIndex + 1) % matchingCards.length;
          localStorage.setItem("rotationIndex", String(nextIndex));

          // Troca o BigCard com o SmallCard promovido
          smallCardsList = smallCardsList.filter((card) => card.id !== promotedCard.id);

          if (currentBigCard) {
            smallCardsList.push(currentBigCard);
          }

          currentBigCard = promotedCard; // Define o novo BigCard
        }

        // Atualiza o valor de "shouldSwap" para alternar no próximo refresh
        localStorage.setItem("shouldSwap", `${!shouldSwap}`);

        // Embaralha SmallCards para garantir dinamismo
        smallCardsList = shuffleEqualDates(smallCardsList);

        // Atualiza estados
        setBigCard(currentBigCard);
        setSmallCards(smallCardsList);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchCards();
  }, []);

  return (
    <Main>
      {/* Renderiza o BigCard */}
      {bigCard && (
        <Article
          id={bigCard.id}
          title={bigCard.title}
          description={bigCard.description}
          image_url={bigCard.image_url}
          date={bigCard.date}
          tags={bigCard.tags}
          read_time={bigCard.read_time}
        />
      )}

      {/* Renderiza os SmallCards */}
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
