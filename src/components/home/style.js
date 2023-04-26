import styled from "styled-components";

const Container = styled.div`
  background-color: #423e3e;
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 100px 100px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items:center;
  color: white;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 25px;
  font-style: normal;
  margin-top: 20px;
`;

Title.Item = styled.p`
  font-size: 52px;
  font-style: normal;
  font-weight: 300;
  margin: 0,0,50px;
  
`;

Title.Items = styled.p`
  font-size: 52px;
  margin: 0,0,50px;
  font-style: normal;
`;

export { Container, Wrapper, Title };
