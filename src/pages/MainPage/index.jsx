import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import Contacts from "../../components/Contacts";
import Header from "../../components/Header";
import Main from "../../components/Main";
import PersonalData from "../../components/PersonalData";

export default function MainPage() {
  const token = localStorage.getItem("@AGENDA-TOKEN");
  const history = useHistory();

  return (
    <>
      {token ? (
        <div>
          <Header>
            <PersonalData />
          </Header>
          <Main>
            <Contacts />
          </Main>
        </div>
      ) : (
        setTimeout(() => {
          toast.info("Faça o login ou o cadastro");
          history.push("/");
        })
      )}
    </>
  );
}
