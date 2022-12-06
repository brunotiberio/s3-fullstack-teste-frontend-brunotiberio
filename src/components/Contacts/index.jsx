import React, { useContext } from "react";
import { ContactsContext } from "../../contexts/ContactsContext";
import { UserContext } from "../../contexts/UserContext";

export default function Contacts() {
  const { userLoggedData } = useContext(UserContext);
  const { getContact } = useContext(ContactsContext);

  return (
    <>
      <h3>Meus Contatos</h3>
      <div>
        {userLoggedData?.contacts.length === 0 ? (
          <p>Adicione seu primeiro contato</p>
        ) : (
          userLoggedData?.contacts.map((contact) => (
            <button onClick={() => getContact(contact.id)} key={contact.id}>
              {contact.fullname}
            </button>
          ))
        )}
      </div>
    </>
  );
}
