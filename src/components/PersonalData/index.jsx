import React from "react";
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";

export default function PersonalData() {
  const { logout, userLoggedData } = useContext(UserContext);
  const history = useHistory()

  return (
    <>
      <div>
        <h1>Agenda</h1>
        <div>
          <h2>Olá, {userLoggedData?.fullname}</h2>
        </div>
        <div>
          <button onClick={() => history.push('/user/edit')}>Alterar meus dados</button>
          <button onClick={() => history.push('/contact/create')}>Adicionar novo contato</button>
          <button onClick={() => logout()}>Sair</button>
        </div>
      </div>
    </>
  );
}
