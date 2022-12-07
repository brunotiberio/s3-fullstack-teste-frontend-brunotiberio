import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import UserEdit from "../../components/UserEdit";
import { StyledH1EditUser, StyledH2EditUser } from "./style";

export default function UserEditPage() {
  return (
    <>
      <Header>
        <StyledH1EditUser>Agenda</StyledH1EditUser>
      </Header>
      <Main>
        <StyledH2EditUser>Editar perfil</StyledH2EditUser>
        <UserEdit />
      </Main>
    </>
  );
}
