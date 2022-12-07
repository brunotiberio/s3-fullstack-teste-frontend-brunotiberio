import React, { useContext } from "react";
import { ContactsContext } from "../../contexts/ContactsContext";
import { UserContext } from "../../contexts/UserContext";
import { StyledDivContacts, StyledH3ContactsPersonalData } from "./style";

export default function Contacts() {
  const { userLoggedData } = useContext(UserContext);
  const { getContact } = useContext(ContactsContext);

  return (
    <>
      <StyledH3ContactsPersonalData>Meus Contatos</StyledH3ContactsPersonalData>
      <StyledDivContacts>
        {userLoggedData?.contacts.length === 0 ? (
          <p>Adicione seu primeiro contato</p>
        ) : (
          userLoggedData?.contacts.map((contact) => (
            <button onClick={() => getContact(contact.id)} key={contact.id}>
              {contact.fullname}
            </button>
          ))
        )}
      </StyledDivContacts>
    </>
  );
}
