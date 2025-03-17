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
          <Link href={"https://www.linkedin.com/in/leonardo-saturnino-564502336"} target="_blank">
            <Menu>Linkedin</Menu>
          </Link>
          <Link href={"https://www.workana.com/freelancer/bd960c85ca3d39a228f856e83cca2c29"} target="_blank">
            <Menu>Workana</Menu>
          </Link>
          <Link href={"https://github.com/LeoSatCode"} target="_blank">
            <Menu>Github</Menu>
          </Link>
          <Link href={"https://www.youtube.com/@guildadosladinos"} target="_blank">
            <Menu>Youtube</Menu>
          </Link>
          </Row>
        </Container>
      </Wrapper>
    </>
  );
};

export { Header };
