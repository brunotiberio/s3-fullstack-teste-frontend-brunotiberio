import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ContactsContext } from "../../contexts/ContactsContext";
import { UserContext } from "../../contexts/UserContext";
import { StyledButtonContainerContactDetail } from "../../pages/ContactDetailPage/style";
import { StyledDivContainerContactDetail, StyledH2ContactDetail } from "./style";

export default function ContactDetail() {
  const { contact, deleteContact } = useContext(ContactsContext);
  const { getUser } = useContext(UserContext);
  const history = useHistory();

  useEffect(() => {
    getUser(); // eslint-disable-next-line
  }, [contact]);

  return (
    <>
        <StyledH2ContactDetail>{contact?.fullname}</StyledH2ContactDetail>
        <StyledDivContainerContactDetail>
        <ul>
          {" "}
          Email para contato
          {contact?.emails.length === 0 ? (
            <li>Atualize para adicionar emails</li>
          ) : (
            contact.emails.map((email, index) => <li key={index}>{email}</li>)
          )}
        </ul>
        <ul>
          {" "}
          Telefone para contato
          {contact?.phones.length === 0 ? (
            <li>Atualize para adicionar telefones</li>
          ) : (
            contact.phones.map((phone, index) => <li key={index}>{phone}</li>)
          )}
        </ul>
        </StyledDivContainerContactDetail>
      <StyledButtonContainerContactDetail>
        <button onClick={() => history.push("/contact/edit")}>
          Atualizar Contato
        </button>
        <button onClick={() => deleteContact(contact.id)}>
          Excluir Contato
        </button>
      </StyledButtonContainerContactDetail>
    </>
  );
}
