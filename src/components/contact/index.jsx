import React from "react";
import { Container, Wrapper, Info, Title, Item } from "./style";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";
import { MdPlace } from "react-icons/md";
export const Contact = () => {
  return (
    <Container>
      <Title>
        <h1 className="titles">Contact Us</h1>
        <p className="subTitle">Have a question or want to work together?</p>
        <p className="titles">|</p>
      </Title>
      <Wrapper>
        <Wrapper.Item>
          <Info>
            <Info.IconPlace />
            <Info.IconTitle>Address</Info.IconTitle>
            <p className="subTitle">Daegu,South Korea</p>
            <Info.IconEmail />
            <Info.IconTitle>Email</Info.IconTitle>
            <p className="subTitle">aayubxon@gmail.com</p>
            <Info.IconCall />
            <Info.IconTitle>Phone</Info.IconTitle>
            <p className="subTitle">+821083054111</p>
          </Info>
        </Wrapper.Item>
        <Item>
          <Item.Info>
            <Item.Name placeholder="Name*" type="text" />
            <Item.Email placeholder="Email*" type="email" />
          </Item.Info>
          <textarea
            className="ItemMessage"
            rows={8}
            placeholder="Your Message Here..."
            type="text"
            name="message"
            id=""
          ></textarea>
          <Item.Button>Send Your Message</Item.Button>
        </Item>
      </Wrapper>
    </Container>
  );
};

export default Contact;
