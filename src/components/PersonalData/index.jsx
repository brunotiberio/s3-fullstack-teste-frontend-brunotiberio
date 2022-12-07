import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { StyledButtonLogout, StyledButtonPersonalData, StyledContainerButtonsPersonalData, StyledH1PersonalData, StyledH2PersonalData } from "./style";

export default function PersonalData() {
  const { logout, userLoggedData } = useContext(UserContext);
  const history = useHistory()

  return (
    <>
      <div>
        <StyledH1PersonalData>Agenda</StyledH1PersonalData>
        <div>
          <StyledH2PersonalData>Olá, {userLoggedData?.fullname}</StyledH2PersonalData>
        </div>
        <StyledContainerButtonsPersonalData>
          <StyledButtonPersonalData onClick={() => history.push('/user/edit')}>Alterar meus dados</StyledButtonPersonalData>
          <StyledButtonPersonalData onClick={() => history.push('/contact/create')}>Adicionar novo contato</StyledButtonPersonalData>
          <StyledButtonLogout onClick={() => logout()}>Sair</StyledButtonLogout>
        </StyledContainerButtonsPersonalData>
      </div>
    </>
  );
}
