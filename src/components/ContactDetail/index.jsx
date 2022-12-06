import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ContactsContext } from "../../contexts/ContactsContext";
import { UserContext } from "../../contexts/UserContext";

export default function ContactDetail() {
  const { contact, deleteContact } = useContext(ContactsContext);
  const {getUser} = useContext(UserContext)
  const history = useHistory()

  useEffect(() => {
    getUser()
  }, [contact])

  return (
    <>
      <div>
        <h2>{contact?.fullname}</h2>
        <ul> Email para contato
          {contact?.emails.length === 0 ? (
            <li>Atualize para adicionar emails</li>
          ) : (
            contact.emails.map((email, index) => <li key={index}>{email}</li>)
          )}
        </ul>
        <ul> Telefone para contato
          {contact?.phones.length === 0 ? (
            <li>Atualize para adicionar telefones</li>
          ) : (
            contact.phones.map((phone, index) => <li key={index}>{phone}</li>)
          )}
        </ul>
      </div>
      <div>
        <button onClick={() => history.push('/contact/edit')}>Atualizar Contato</button>
        <button onClick={() => deleteContact(contact.id)}>Excluir Contato</button>
      </div>
    </>
  );
}
