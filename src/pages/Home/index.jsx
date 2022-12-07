import React from "react";
import Login from "../../components/Login";
import { StyledH1Home } from "./style";

export default function Home() {
  return (
    <>
      <StyledH1Home>Seja bem-vindo a sua Agenda</StyledH1Home>
      <Login />
    </>
  );
}
