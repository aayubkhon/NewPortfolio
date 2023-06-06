import styled from "styled-components";

const Container = styled.div`
  background-color: #000;
  color: #ffffff;
  display: flex;
  width: 100%;
  height: 50px;
  padding: 50px 100px;
  /* position:sticky;
  top:0; */
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
