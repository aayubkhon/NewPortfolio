import React from "react";
import { Container, Wrapper, IconTitle, Title, Box } from "./style";
import { AiOutlineDesktop } from "react-icons/ai";
import { BsBarChartLine } from "react-icons/bs";
import { BiMobileAlt } from "react-icons/bi";
import { BiTrendingUp } from "react-icons/bi";
import { BsLightbulb } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export const Services = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 7000,
    initialSlide: 4,
    swipeToSlide: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Container>
      <Title>
        <h1>My Services</h1>
        <p>Everything I offer with a detailed overview of each.</p>
      </Title>
      <Wrapper.Box>
        <Slider {...settings} dotsClass="test-css">
          <Wrapper>
            <Box>
              <Wrapper.Item>
                <AiOutlineDesktop className="fonticon" />
                <IconTitle>Web Development</IconTitle>
                <IconTitle.Text>
                  My web development services include both front-end and
                  back-end development.
                </IconTitle.Text>
              </Wrapper.Item>
            </Box>
          </Wrapper>
          <Wrapper>
            <Box>
              <Wrapper.Item>
                <BsBarChartLine className="fonticon" />
                <IconTitle>Dynamic</IconTitle>
                <IconTitle.Text>
                  Websites don't have to be static, I love making pages come to
                  life.
                </IconTitle.Text>
              </Wrapper.Item>
            </Box>
          </Wrapper>
          <Wrapper>
            <Box>
              <Wrapper.Item>
                <BiTrendingUp className="fonticon" />
                <IconTitle>Fast</IconTitle>
                <IconTitle.Text>
                  Fast load times and lag free interaction, my highest priority.
                </IconTitle.Text>
              </Wrapper.Item>
            </Box>
          </Wrapper>
          <Wrapper>
            <Box>
              <Wrapper.Item>
                <BiMobileAlt className="fonticon" />
                <IconTitle>Responsive</IconTitle>
                <IconTitle.Text>
                  My layouts will work on any device, big or small.
                </IconTitle.Text>
              </Wrapper.Item>
            </Box>
          </Wrapper>
          <Wrapper>
            <Box>
              <Wrapper.Item>
                <BsLightbulb className="fonticon" />
                <IconTitle>Development</IconTitle>
                <IconTitle.Text>
                  "Whether it is enhancing an existing application or
                  architecting an application, I'm up for the challenge."
                </IconTitle.Text>
              </Wrapper.Item>
            </Box>
          </Wrapper>
        </Slider>
      </Wrapper.Box>
    </Container>
  );
};

export default Services;

