import React from "react";
import { useHistory } from "react-router-dom";
import ContactDetail from "../../components/ContactDetail";
import Header from "../../components/Header";
import Main from "../../components/Main";
import { StyledButtonContainerContactDetail, StyledH1ContactDetail } from "./style";

export default function ContactDetailPage() {
  const history = useHistory();

  return (
    <>
      <Header>
        <StyledH1ContactDetail>Agenda</StyledH1ContactDetail>
      </Header>
      <Main>
        <ContactDetail />
        <StyledButtonContainerContactDetail>
        <button onClick={() => history.push("/user")}>
          Voltar para a página principal
        </button>
        </StyledButtonContainerContactDetail>
      </Main>
    </>
  );
}
