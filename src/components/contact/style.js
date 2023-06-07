import styled from "styled-components";
import { IoIosCall } from "react-icons/io";
import { MdPlace } from "react-icons/md";
import { IoMdMail } from "react-icons/io";

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
  margin: 50px 120px;
`;
Wrapper.Item = styled.div`
  display: flex;
  flex-direction: column;
`;

const Info = styled.div`
  background-color: #ffffff;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 270px;
  height: 400px;
  gap: 10px;
  border-radius: 15px;
`;

Info.IconTitle = styled.p`
  color: black;
  font-size: 21px;
  font-style: normal;
  font-weight: 500;
`;

Info.IconCall = styled(IoIosCall)`
  width: 30px;
  height: 30px;
  text-align: center;
`;

Info.IconPlace = styled(MdPlace)`
  width: 30px;
  height: 30px;
  text-align: center;
  margin-top: 10px;
`;
Info.IconEmail = styled(IoMdMail)`
  width: 30px;
  height: 30px;
  text-align: center;
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  border-radius: 15px;
`;

Item.Info = styled.div`
  display: flex;
`;

Item.Name = styled.input`
  width: 370px;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  padding-left: 13px;
  color: #5e5e5e;
  font-size: 15px;
  outline:none;
  border:none;
`;

Item.Email = styled.input`
  width: 370px;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  margin-left: 22px;
  padding-left: 13px;
  color: #5e5e5e;
  font-size: 15px;
  outline:none;
  border:none;
`;

Item.Message = styled.input`
  background-color: white;
  border-radius: 10px;
  color: #5e5e5e;
  
`;

Item.Button = styled.button`
  width: 760px;
  height: 50px;
  background-color: white;
  border-radius: 10px;
  font-size: 15px;
  font-weight:600;
  font-family:sans-serif;
  outline:none;
  border:none;
  margin-top:40px;
  cursor: pointer;
  color:#000000;
`;

export { Container, Wrapper, Title, Info, Item };
