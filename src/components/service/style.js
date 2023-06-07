import styled from "styled-components";

const Container = styled.div`
  background-color: #0f1113;
  height: 100vh;
  padding-top: 40px;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding-top: 50px;
  gap: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
`;

Wrapper.Box = styled.div`
  width: 85%;
  margin-left: 100px;
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  width: 360px;
  height: 300px;
  transform: translateX(0px);
  transition: 1s all;
  :hover {
    box-shadow: 2px 2px 5px 5px #5e5e5e;
    background: linear-gradient(0deg, #000, #262626);
    cursor: grab;
  }
`;

Wrapper.Item = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const IconTitle = styled.p`
  color: #ffffff;
  font-size: 22px;
  font-weight: 300;
  padding-top: 30px;
  font-family: "Poppins", sans-serif;
`;

IconTitle.Text = styled.p`
  font-size: 15px;
  font-style: normal;
  font-weight: 300;
  color: #5e5e5e;
  width: 80%;
  text-align: center;
  padding-top: 15px;
  font-family: "Poppins", sans-serif;
`;

export { Container, Title, Wrapper, Box, IconTitle };
