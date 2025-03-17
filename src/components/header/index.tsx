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
          
            <Menu href={"https://www.linkedin.com/in/leonardo-saturnino-564502336"} target="_blank">Linkedin</Menu>
          
            <Menu href={"https://www.workana.com/freelancer/bd960c85ca3d39a228f856e83cca2c29"} target="_blank">Workana</Menu>
         
            <Menu href={"https://github.com/LeoSatCode"} target="_blank">Github</Menu>
         
            <Menu href={"https://www.youtube.com/@guildadosladinos"} target="_blank">Youtube</Menu>
          
          </Row>
        </Container>
      </Wrapper>
    </>
  );
};

export { Header };
