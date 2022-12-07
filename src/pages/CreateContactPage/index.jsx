import React from "react";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import CreateContact from "../../components/CreateContact";
import { StyledH1ContactCreate } from "./style";

export default function CreateContactPage() {
  const token = localStorage.getItem("@AGENDA-TOKEN");
  const history = useHistory();
  return (
    <>
      {token ? (
        <div>
          <StyledH1ContactCreate>Agenda</StyledH1ContactCreate>
          <CreateContact />
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
