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
import Services from "../service";
import Work from "../work";
import Contact from "../contact";
import Footer from "../footer";
export const Home = () => {
  const [text] = useTypewriter({
    words: ["Ayubkhon", "a Web Developer"],
    typeSpeed: 110,
    deleteSpeed: 120,
    delaySpeed: 2000,
    loop: true,
  });


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
          <a
            href="https://www.facebook.com/profile.php?id=100010676509628"
            target="_blank"
            rel="noopener noreferrer"
            className="icons"
          >
            <FaFacebookF className="item" />
          </a>
          <a
            className="icons"
            href="https://www.linkedin.com/in/ayubkhon-akramov-9280b6235/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GrLinkedinOption className="item" />
          </a>
          <a
            className="icons"
            href="https://www.instagram.com/aayubb__/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="item" />
          </a>
          <a
            className="icons"
            href="https://github.com/aayubkhon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="item" />
          </a>
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
      <Services/>
      <Work/>
      <Contact/>
      <Footer/>
    </>
  );
};

export default Home;
