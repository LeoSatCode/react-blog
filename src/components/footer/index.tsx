import React from "react";
import { FooterContainer, FooterText } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        © 2025 My Website. All rights reserved.
      </FooterText>
      <FooterText>
        Developed with <span>❤</span> By Leonardo Saturnino.
      </FooterText>
    </FooterContainer>
  );
};

export { Footer };
