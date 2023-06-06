import styled from "styled-components";


const Container = styled.div`
background-color:#000000;
color:white;
display:flex;
align-items:center;
justify-content:center;
padding:50px 120px;
`


const Item = styled.div`
display:flex;
flex-direction:column;
margin-left:30px;
gap:23px;
`
const Name = styled.p`
font-size:17px;
font-style:normal;
font-weight:600;
`

Name.Job = styled.h1`
font-size:27px;
font-style:normal;
font-weight:800;
`
Name.Title = styled.p`
font-size:17px;
font-style:normal;
font-weight:300;
color:#5e5e5e;
width:70%;
`

Name.Info = styled.p`
font-size:20px;
font-style:normal;
font-weight:300;
color:#5e5e5e;

`

const Box = styled.div`
display:flex;
align-items:center;
gap:20px;
`
Box.Button = styled.button`
border:1px solid white;
width:150px;
height:55px;
border-radius:30px;
outline:none;
color:white;
background:transparent;
cursor: pointer;
`
const MyPhoto = styled.img`
height:70vh;
`

export{Container,Item,Name,Box,MyPhoto}