import React from "react";
import { Container,Title, Wrapper } from "./style";
import { useTypewriter, Cursor } from "react-simple-typewriter";
export const Home = () => {
  const [text] = useTypewriter({
    words: [" Ayubkhon.", " a Web", " Developer"],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <Container>
      <div>
          <Title>Welcome!</Title>
        <Wrapper>
          <Title.Item>I'm</Title.Item>
          <Title.Items>{text}</Title.Items>
        </Wrapper>
      </div>
    </Container>
  );
};

export default Home;
