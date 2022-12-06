import { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const ContactsContext = createContext({});

export const ContactsProvider = ({ children }) => {
  const [contact, setContact] = useState(null);
  const [contactDeleted, setContactDeleted] = useState(false)
  const {getUser} = useContext(UserContext)
  const history = useHistory();
  
  
  useEffect(() => {
    getUser()
  }, [contact])

  useEffect(() => {
    getUser()
  }, [contactDeleted])

  async function contactCreate(formData) {
    const token = localStorage.getItem("@AGENDA-TOKEN")

    try {
      const parsedToken = JSON.parse(token);

      await api.post("/contacts", formData, {
        headers: {
          Authorization: `Bearer ${parsedToken}`,
        }
      });

      toast.success("Contato criado com sucesso");

      setTimeout(() => {
        history.push("/user");
      }, 1500);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }


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

      await api.delete(`/contacts/${contactId}`, {
        headers: {
          Authorization: `Bearer ${parsedToken}`,
        },
      });
      setContactDeleted(!contactDeleted)
      toast.success("Contato deletado com sucesso");
      history.push('/user')
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
      value={{ contactCreate, getContact, deleteContact, editContact, contact }}
    >
      {children}
    </ContactsContext.Provider>
  );
};
