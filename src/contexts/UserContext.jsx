import { useState, useEffect } from "react";
import { createContext } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
// import { Redirect } from "react-router-dom";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [userLoggedData, setUserLoggedData] = useState(null);

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
      // setTimeout(() => {
      //   // <Redirect to='/' />
      // }, 3000)
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
      // setUserLogged(response.data.user)
      // setTimeout(() => {
      //   // <Redirect to='/' />
      // }, 3000)
    } catch (error) {
      toast.error("Erro interno do servidor. Tente novamente mais tarde");
    }
  }

  async function getUser() {
    const token = localStorage.getItem("@AGENDA-TOKEN");
    const id = localStorage.getItem("@AGENDA-ID");
    try {
      const parsedToken = JSON.parse(token);

      const response = await api.get(`/users/${id}`, {
        headers: {
          Authorization: `Bearer ${parsedToken}`,
        },
      });
      setUserLoggedData(response.data);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  console.log(userLoggedData);

  return (
    <UserContext.Provider
      value={{
        userCreate,
        userLogin,
        getUser,
        setUserLoggedData,
        userLoggedData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
