import styled from "styled-components";

const Container = styled.div`
  background-color: #423e3e;
  color: #ffffff;
  display: flex;
  width: 100%;
  height: 50px;
  padding: 0 100px;
`;

const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1400px;
  cursor: pointer;
  text-decoration: none;
  gap: 30px;
  text-transform: capitalize;
  color: white;
`;

export { Container, Section };
