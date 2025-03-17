import React from "react";
import { Container, HeaderImg, Menu, Row, Wrapper } from "./styles";
import logo from "../../assets/images/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <Wrapper>
        <Container>
          <Link href={"/"}>
          <HeaderImg src={logo.src} alt="logo" />
          </Link>
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
