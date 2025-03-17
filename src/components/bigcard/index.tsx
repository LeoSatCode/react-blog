'use client';

import React from "react";
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

interface ArticleProps {
  id: string;
  title: string;
  description: string;
  image_url: string;
  date: string;
  tags: string;
  read_time: string;
}

const Article: React.FC<ArticleProps> = ({
  id,
  title,
  description,
  image_url,
  date,
  tags,
  read_time,
}) => {
  return (
    <ContainerArticle>
      <TextContent>
        
        <Date>{date}</Date>
        <Link href={`/materia/${id}`} passHref>
          <Title>{title}</Title>
        </Link>
        <ReadingTime>{read_time}</ReadingTime>
        
        <Link href={`/materia/${id}`} passHref>
        <Content>{description}</Content>
        </Link>
       
        <TagsContainer>
          {tags.split(",").map((tag, index) => (
            <Link key={index} href={`/tags/${tag.trim()}`} passHref>
              <TagButton>{tag.trim()}</TagButton>
            </Link>
          ))}
        </TagsContainer>
      
      </TextContent>

      <Link href={`/materia/${id}`} passHref>
      <ImageContent>
        <Image
          src={image_url}
          alt={title}
          width={400}
          height={250}
        />
      </ImageContent>
      </Link>
    </ContainerArticle>
  );
};

export { Article };
