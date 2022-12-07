import React from "react";
import { useContext } from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import ContactEdit from "../../components/ContactEdit";
import { ContactsContext } from "../../contexts/ContactsContext";
import { StyledH1ContactEdit, StyledH2ContactEdit } from "./style";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export default function ContactEditPage() {
  const { contact } = useContext(ContactsContext);
  const token = localStorage.getItem("@AGENDA-TOKEN");
  const history = useHistory();

  return (
    <>
      {token ? (
        <div>
          <Header>
            <StyledH1ContactEdit>Agenda</StyledH1ContactEdit>
          </Header>
          <Main>
            <StyledH2ContactEdit>
              Editar contatos de {contact?.fullname}
            </StyledH2ContactEdit>
            <ContactEdit />
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
