import React from "react";
import { useContext } from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import ContactEdit from "../../components/ContactEdit";
import { ContactsContext } from "../../contexts/ContactsContext";

export default function ContactEditPage() {
  const { contact } = useContext(ContactsContext);

  return (
    <>
      <Header>
        <h1>Agenda</h1>
      </Header>
      <Main>
        <h2>Editar contatos de {contact?.fullname}</h2>
        <ContactEdit />
      </Main>
    </>
  );
}
