import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../../components/Header";
import Main from "../../components/Main";
import UserEdit from "../../components/UserEdit";
import { StyledH1EditUser, StyledH2EditUser } from "./style";

export default function UserEditPage() {
  const token = localStorage.getItem("@AGENDA-TOKEN");
  const history = useHistory();

  return (
    <>
      {token ? (
        <div>
          <Header>
            <StyledH1EditUser>Agenda</StyledH1EditUser>
          </Header>
          <Main>
            <StyledH2EditUser>Editar perfil</StyledH2EditUser>
            <UserEdit />
          </Main>
        </div>
      ) : (
        setTimeout(() => {
          toast.info("Faça o login ou o cadastro");
          history.push("/");
        })
      )}
    </>
  );
}
