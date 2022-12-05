import React from "react";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

export default function PersonalData() {

  const {logout} = useContext(UserContext)

  return (
    <>
      <div>
        <h1>Agenda</h1>
        <div>
          <h2>Olá, fullname</h2>
        </div>
        <div>
          <button>Alterar meus dados</button>
          <button>Adicionar novo contato</button>
          <button onClick={() => logout()}>Sair</button>
        </div>
      </div>
    </>
  );
}
