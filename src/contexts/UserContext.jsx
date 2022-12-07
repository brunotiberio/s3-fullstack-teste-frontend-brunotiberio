import { useState, useEffect } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useHistory } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userLoggedData, setUserLoggedData] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("@AGENDA-TOKEN");
    const id = localStorage.getItem("@AGENDA-ID");

    async function logado() {
      try {
        if (token) {
          const parsedToken = JSON.parse(token);

          const response = await api.get(`/users/${id}`, {
            headers: {
              Authorization: `Bearer ${parsedToken}`,
            },
          });
          setUserLoggedData(response.data);
        }
      } catch (error) {
        localStorage.removeItem("@AGENDA-ID");
        localStorage.removeItem("@AGENDA-TOKEN");
      }
    }
    logado();
  }, []);

  async function userCreate(formData) {
    try {
      await api.post("/users", formData);

      toast.success("Usuário cadastrado com sucesso. Indo para o Login");

      setTimeout(() => {
        history.push("/");
      }, 3000);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  async function userLogin(formData) {
    try {
      const response = await api.post("/login", formData);
      localStorage.setItem(
        "@AGENDA-TOKEN",
        JSON.stringify(response.data.token)
      );
      localStorage.setItem("@AGENDA-ID", response.data.id);
      toast.success("Logado com sucesso. Redirecionando...");
      getUser();

      setTimeout(() => {
        history.push("/user");
      }, 1500);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  async function getUser() {
    const token = localStorage.getItem("@AGENDA-TOKEN");
    const id = localStorage.getItem("@AGENDA-ID");
    try {
      if (token) {
        const parsedToken = JSON.parse(token);

        const response = await api.get(`/users/${id}`, {
          headers: {
            Authorization: `Bearer ${parsedToken}`,
          },
        });
        setUserLoggedData(response.data);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  async function editUser(contactId, formData) {
    const token = localStorage.getItem("@AGENDA-TOKEN");
    try {
      const parsedToken = JSON.parse(token);

      const response = await api.patch(`/users/${contactId}`, formData, {
        headers: {
          Authorization: `Bearer ${parsedToken}`,
        },
      });
      setUserLoggedData(response.data);
      toast.success("Usuário atualizado com sucesso");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  async function deleteUser(userId) {
    const token = localStorage.getItem("@AGENDA-TOKEN");
    try {
      const parsedToken = JSON.parse(token);

      await api.delete(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${parsedToken}`,
        },
      });

      localStorage.removeItem("@AGENDA-TOKEN");
      localStorage.removeItem("@AGENDA-ID");

      setUserLoggedData(null);

      history.push("/");

      toast.success("Usuário deletado com sucesso");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }

  async function logout() {
    localStorage.removeItem("@AGENDA-TOKEN");
    localStorage.removeItem("@AGENDA-ID");

    toast.success("Saindo da Agenda. Até a próxima =D");

    setUserLoggedData(null);

    history.push("/");
  }

  return (
    <UserContext.Provider
      value={{
        userCreate,
        userLogin,
        getUser,
        setUserLoggedData,
        deleteUser,
        editUser,
        logout,
        userLoggedData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
