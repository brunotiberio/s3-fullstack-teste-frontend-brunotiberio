import React from "react";
import CreateContact from "../../components/CreateContact";
import { StyledH1ContactCreate } from "./style";

export default function CreateContactPage() {
  return (
    <>
      <StyledH1ContactCreate>Agenda</StyledH1ContactCreate>
      <CreateContact />
    </>
  );
}
