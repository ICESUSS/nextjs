"use client"

import { Container } from "@mui/material";

type AppLogoProps = {
  color: string
  title: string
}
export default function AppLogo({title, color}: AppLogoProps) {
    const subtitle = "It suphan";
    const dateNow = new Date();
    const timeNow = <p>{dateNow.toLocaleTimeString()}</p>
    const isShow = true;
    const isShowDate = true;
    const onHandleClick = ()=>{
      alert("Click me!!!");
    }
  return (
    <Container>
      <p style={{color: color,border: "1px solid red"}}>{title}</p>
    <button onClick={onHandleClick}>Click me!</button> {""}
      <small>{subtitle.toUpperCase()}</small>
      <br />
      <small>{dateNow.toDateString()}</small>
      {''}
    
      {
        isShowDate ? <small>{dateNow.toDateString()}</small> : <small>{timeNow}</small>
      }
    </Container>
  );
}