import React from 'react';
import { Row, Column, ContainerTitle, ContainerText } from './styles';

const Title = () => {
  return (
    <>
      <Row>
        <ContainerTitle>
          <h1>THE BLOG</h1>
        </ContainerTitle>
        <Column>
          <ContainerText>
            <p>Your Blog about everything</p>
          </ContainerText>
        </Column>
      </Row>
    </>
  );
};

export { Title };
