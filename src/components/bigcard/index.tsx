"use client";

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
  CarouselContainer,
  Dot,
} from "./styles";
import Image from "next/image";
import Link from "next/link";
import { News } from "@/@types/news";

interface ArticleCarouselProps {
  articles: News[];
}

const ArticleCarousel: React.FC<ArticleCarouselProps> = ({ articles }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % articles.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [articles]);

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  const currentArticle = articles[currentIndex]; 

  return (
    <div>
      <ContainerArticle>
        <TextContent>
          <Date>{currentArticle.date}</Date>
          <Link href={`/materia/${currentArticle.id}`} passHref>
            <Title>{currentArticle.title}</Title>
          </Link>
          <ReadingTime>{currentArticle.read_time}</ReadingTime>
          <Link href={`/materia/${currentArticle.id}`} passHref>
            <Content>{currentArticle.description}</Content>
          </Link>
          <TagsContainer>
            {currentArticle.tags.split(",").map((tag, index) => (
              <Link key={index} href={`/tags/${tag.trim()}`} passHref>
                <TagButton>{tag.trim()}</TagButton>
              </Link>
            ))}
          </TagsContainer>
        </TextContent>

        <Link href={`/materia/${currentArticle.id}`} passHref>
          <ImageContent>
            <Image
              src={currentArticle.image_url}
              alt={currentArticle.title}
              width={2560}
              height={1440}
            />
          </ImageContent>
        </Link>
      </ContainerArticle>

      <CarouselContainer>
        {articles.map((_, index) => (
          <Dot
            key={index}
            $isActive={index === currentIndex}
            onClick={() => handleDotClick(index)}
          />
        ))}
      </CarouselContainer>
    </div>
  );
};

export { ArticleCarousel };
