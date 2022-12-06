import React from "react";
import { useHistory } from "react-router-dom";
import ContactDetail from "../../components/ContactDetail";
import Header from "../../components/Header";
import Main from "../../components/Main";

export default function ContactDetailPage() {
  const history = useHistory();

  return (
    <>
      <Header>
        <h1>Agenda</h1>
      </Header>
      <Main>
        <ContactDetail />
        <button onClick={() => history.push("/user")}>
          Voltar para a página principal
        </button>
      </Main>
    </>
  );
}
