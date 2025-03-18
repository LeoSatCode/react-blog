import React, { useState } from "react";
import {
  Container,
  HeaderImg,
  SearchInputContainer,
  Input,
  SearchButton,
  Menu,
  Row,
  Wrapper,
} from "./styles";
import logo from "../../assets/images/logo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { api } from "@/lib/api";

const Header = () => {
  const [tag, setTag] = useState("");
  const router = useRouter();

  const handleSearch = async () => {
    if (tag.trim() === "") {
      alert("Please, type a tag name.");
      return;
    }
    try {
      const { data } = await api.get("/news", {
        params: {
          tags: `ilike.%${tag.trim()}%`,
        },
      });
      if (data.length > 0) {
        router.push(`/tags/${tag.trim()}`);
      } else {
        alert("Tag not found. Please try another tag.");
      }
    } catch (error) {
      console.error("Error fetching articles by tag:", error);
      alert("An error occurred. Please try again.");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <Wrapper>
      <Container>
        <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
          <Link href={"/"}>
            <HeaderImg src={logo.src} alt="logo" />
          </Link>
          <SearchInputContainer>
            <Input
              placeholder="Type a tag name..."
              value={tag}
              onChange={(e) => setTag(e.target.value)}
              onKeyDown={handleKeyPress}
            />
          </SearchInputContainer>
          <SearchButton onClick={handleSearch}>🔍</SearchButton>
        </div>

        <Row>
          <Menu
            href={"https://www.linkedin.com/in/leonardo-saturnino-564502336"}
            target="_blank"
          >
            Linkedin
          </Menu>
          <Menu
            href={"https://www.workana.com/freelancer/bd960c85ca3d39a228f856e83cca2c29"}
            target="_blank"
          >
            Workana
          </Menu>
          <Menu href={"https://github.com/LeoSatCode"} target="_blank">
            Github
          </Menu>
          <Menu
            href={"https://www.youtube.com/@guildadosladinos"}
            target="_blank"
          >
            Youtube
          </Menu>
        </Row>
      </Container>
    </Wrapper>
  );
};

export { Header };
