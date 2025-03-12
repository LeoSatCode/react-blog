import React from 'react';
import {
  Card,
  ImageContainer,
  TagsContainer,
  TagButton,
  Date,
  Title,
  ReadingTime,
  Description,
} from './styles';
import Image from 'next/image';
import { SmallCardProps } from './types';

const SmallCard: React.FC<SmallCardProps> = ({
  image,
  tags,
  date,
  title,
  readingTime,
  description,
}) => {
  return (
    <Card>
  
      <ImageContainer>
        <Image src={image} alt="Small card image" />
      </ImageContainer>

      <TagsContainer>
        {tags.map((tag, index) => (
          <TagButton key={index}>{tag}</TagButton>
        ))}
      </TagsContainer>

      <Date>{date}</Date>

      <Title>{title}</Title>

      <ReadingTime>{readingTime}</ReadingTime>

      <Description>{description}</Description>
    </Card>
  );
};

export { SmallCard };
