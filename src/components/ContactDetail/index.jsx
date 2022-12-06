import React, { useContext } from "react";
import { ContactsContext } from "../../contexts/ContactsContext";

export default function ContactDetail() {
  const { contact } = useContext(ContactsContext);

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
        <button>Atualizar Contato</button>
        <button>Excluir Contato</button>
      </div>
    </>
  );
}

// usado para fazer o map dos contatos
