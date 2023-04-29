import React from "react";
import { Box, Container, Item, Name, } from "./style";
import mee from "../../assets/img/mee.jpeg";
export const About = () => {
  // const newTab = url =>{
  //   window.open(url)
  // }
  return (
    <Container>
      <img style={{height: 400}} src={mee} alt="" />
      <Item>
        <Name>My name is Akramov Ayubkhon.</Name>
        <Name.Job>I'm Front-End React Web Developer </Name.Job>
        <Name.Title>
          I'm an enthusiastic and detail-oriented Frontend Software Engineer
          seeking an entry-level position with Company to use my skills in
          coding, troubleshooting complex problems, and assisting in the timely
          completion of projects.
        </Name.Title>
        <Name>
          Full Name : <span className="color">Akramov Ayubkhon</span>
        </Name>
        <Name>
          Age : <span className="color">25</span>
        </Name>
        <Name>
          Address : <span className="color">Korea//Daegu city</span>
        </Name>
        <Name>
          Phone Number : <span className="color">01083054111</span>
        </Name>
        <Name>
          Email : <span className="color">aayubxon701@gmail.com</span>
        </Name>
        <Box>
          <Box.Button >CV in English</Box.Button>
          <Box.Button >CV in Korea</Box.Button>
        </Box>
      </Item>
    </Container>
  );
};

export default About;
