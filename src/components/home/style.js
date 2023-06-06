import styled from "styled-components";

const Container = styled.div`
  background-color: #0f1113;
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 130px 100px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  color: white;
  gap: 50px;
`;

const Title = styled.p`
  font-weight: 600;
  font-size: 25px;
  font-style: normal;
  margin-top: 20px;
  color: white;
`;

Title.Item = styled.p`
  font-size: 55px;
  font-style: normal;
  font-weight: 300;
`;

Title.Items = styled.p`
  font-weight: 800;
  font-size: 55px;
  font-style: normal;
`;

const Icon = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  margin-top: 25px;
`;

const Mouse = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  color: white;
`;

export { Container, Wrapper, Title, Icon, Mouse };
