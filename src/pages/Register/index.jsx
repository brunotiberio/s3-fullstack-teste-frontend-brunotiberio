import React from "react";
import Register from "../../components/Register";
import { StyledH1Register } from "./style";

export default function RegisterPage() {
  return (
    <>
      <StyledH1Register>Faça seu cadastro na Agenda</StyledH1Register>
      <Register />
    </>
  );
}
