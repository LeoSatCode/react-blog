import React from 'react';
import Link from 'next/link';
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
  id,
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
        <Image src={image} alt="Small card image" width={1769} height={799} />
      </ImageContainer>

      <TagsContainer>
        {tags.map((tag, index) => (
          <Link key={index} href={`/tags/${tag.trim()}`} passHref>
            <TagButton>{tag.trim()}</TagButton>
          </Link>
        ))}
      </TagsContainer>

      <Date>{date}</Date>

      <Link href={`/materia/${id}`} passHref>
        <Title>{title}</Title>
      </Link>

      <ReadingTime>{readingTime}</ReadingTime>

      <Description>{description}</Description>
    </Card>
  );
};

export { SmallCard };
