import React from "react";
import { Container, HeaderImg, Menu, Row, Wrapper } from "./styles";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <HeaderImg src={logo.src} alt="logo" />
          <Row>
            <Menu>Linkedin</Menu>
            <Menu>Workana</Menu>
            <Menu>Github</Menu>
            <Menu>Youtube</Menu>
          </Row>
        </Container>
      </Wrapper>
    </>
  );
};

export { Header };
