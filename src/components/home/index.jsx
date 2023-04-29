import React from "react";
import { Container, Icon, Mouse, Title, Wrapper } from "./style";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GrLinkedinOption } from "react-icons/gr";
import { FiChevronsDown } from "react-icons/fi";
import { Link } from "react-scroll";
import About from "../about";
export const Home = () => {
  const [text] = useTypewriter({
    words: ["Ayubkhon", "a Web", "Developer"],
    typeSpeed: 110,
    deleteSpeed: 120,
    delaySpeed: 2000,
    loop: true,
  });

  const newTab = (url) => {
    window.open(url);
  };

  return (
    <>
      <Container>
        <Title>Welcome !</Title>
        <Wrapper>
          <Title.Item>I'm</Title.Item>
          <Title.Items>
            {text}
            <Cursor cursorStyle="⇠" cursorColor="red" />
          </Title.Items>
        </Wrapper>
        <Title>FIND ME IN ⇣</Title>
        <Icon>
          <span className="icons">
            <FaFacebookF
              onClick={() =>
                newTab(
                  "https://www.facebook.com/profile.php?id=100010676509628"
                )
              }
              className="item"
            />
          </span>
          <span className="icons">
            <GrLinkedinOption
              onClick={() =>
                newTab(
                  "https://www.linkedin.com/in/ayubkhon-akramov-9280b6235/"
                )
              }
              className="item"
            />
          </span>
          <span className="icons">
            <FaInstagram
              onClick={() => newTab("https://www.instagram.com/aayubb__/")}
              className="item"
            />
          </span>
          <span className="icons">
            <FaGithub
              onClick={() => newTab("https://github.com/aayubkhon")}
              className="item"
            />
          </span>
        </Icon>
        <Mouse>
          <Link
            activeClass="active"
            className="test1"
            to="test1"
            spy={true}
            smooth={true}
            duration={500}
            offset={50}
          >
            <FiChevronsDown className="mouse" />
          </Link>
        </Mouse>
      </Container>
      <About />
    </>
  );
};

export default Home;
