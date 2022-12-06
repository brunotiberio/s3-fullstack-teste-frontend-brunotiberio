import React, { useContext, useEffect, useState } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { ContactsContext } from "../../contexts/ContactsContext";
import { UserContext } from "../../contexts/UserContext";

export default function CreateContact() {
  const { contactCreate } = useContext(ContactsContext);
  const { getUser } = useContext(UserContext);
  const [contactCreated, setContactCreated] = useState(false)
  const history = useHistory()

  useEffect(() => {
    getUser()
  }, [contactCreated])

  const formSchema = yup.object().shape({
    fullname: yup.string().required("Nome é obrigatório"),
    emails: yup.string().required("Email obrigatório"),
    phones: yup.string().required("Telefone obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    const formData = data;
    formData.emails = formData.emails.replace(" ", "").split(",");
    formData.phones = formData.phones.replace(" ", "").split(",");
    setContactCreated(!contactCreated)
    contactCreate(formData);
  };

  return (
    <>
      <h2>Adicionar contato</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <input
          type="text"
          placeholder="Nome Completo"
          {...register("fullname")}
        />
        {errors.fullname?.message && <p>Digite seu nome completo</p>}

        <input
          type="text"
          placeholder="Coloque seus e-mails (separe por vírgula)"
          {...register("emails")}
        />
        {errors.emails?.message && (
          <p>Coloque um ou mais e-mails separados por vírgula</p>
        )}

        <input
          type="text"
          placeholder="Coloque seus telefones (separe por vírgula)"
          {...register("phones")}
        />
        {errors.phones?.message && (
          <p>Coloque um ou mais telefones separados por vírgula</p>
        )}

        <button>Adicionar</button>
      </form>
      <button onClick={() => history.push('/user')}>Voltar a página principal</button>
    </>
  );
}
