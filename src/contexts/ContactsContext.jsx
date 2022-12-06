import { useState } from "react";
import { createContext } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

export const ContactsContext = createContext({});

export const ContactsProvider = ({ children }) => {
  const [contact, setContact] = useState(null);
  const history = useHistory();

  async function getContact(contactId) {
    const token = localStorage.getItem("@AGENDA-TOKEN");

    try {
      const parsedToken = JSON.parse(token);

      const response = await api.get(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${parsedToken}`,
        },
      });
      setContact(response.data);
      history.push("/contact/detail");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  async function deleteContact(contactId) {
    const token = localStorage.getItem("@AGENDA-TOKEN");
    try {
      const parsedToken = JSON.parse(token);

      const response = await api.delete(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${parsedToken}`,
        },
      });
      toast.success("Contato deletado com sucesso");
      return response.data;
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  async function editContact(contactId, formData) {
    const token = localStorage.getItem("@AGENDA-TOKEN");
    try {
      const parsedToken = JSON.parse(token);

      const response = await api.patch(`/contacts/${contactId}`, formData, {
        headers: {
          Authorization: `Bearer ${parsedToken}`,
        },
      });
      setContact(response.data)
      toast.success("Contato atualizado com sucesso");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  return (
    <ContactsContext.Provider
      value={{ getContact, deleteContact, editContact, contact }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
