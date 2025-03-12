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
import Banner from "../../assets/images/static.png";

const Article = () => {
  return (
    <ContainerArticle>
      <TextContent>
        <Date>March 12, 2025</Date>
        <Title>
          Dolor Sit Amet Inceptos Ultricies: Nova Era de Consectetur Adipiscing
          Elit
        </Title>
        <ReadingTime>5 min read</ReadingTime>
        <Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas non
          nisl mauris. Vestibulum quis nisl neque. Vivamus nec est nulla. Fusce
          et interdum sapien, at commodo dolor. Praesent hendrerit lorem euismod
          odio fermentum, sed efficitur ligula accumsan. Sed auctor ornare est
          ut pharetra. Pellentesque interdum, magna vitae pellentesque
          dignissim, massa.
        </Content>
        <TagsContainer>
          <TagButton>React</TagButton>
          <TagButton>NextJS</TagButton>
          <TagButton>Design</TagButton>
          <TagButton>UI</TagButton>
        </TagsContainer>
      </TextContent>
      <ImageContent>
        <Image src={Banner} alt="banner" />
      </ImageContent>
    </ContainerArticle>
  );
};

export { Article };
