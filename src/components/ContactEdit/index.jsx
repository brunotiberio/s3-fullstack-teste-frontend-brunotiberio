import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { ContactsContext } from "../../contexts/ContactsContext";

export default function ContactEdit() {
  const { contact, editContact } = useContext(ContactsContext);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    const formData = data;

    if (formData.emails.length !== contact.emails.length) {
      formData.emails = formData.emails.replace(" ", "").split(",");
    }

    if (formData.phones.length !== contact.phones.length) {
      formData.phones = formData.phones.replace(" ", "").split(",");
    }

    editContact(contact?.id, formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Nome Completo"
          {...register("fullname", { value: contact?.fullname })}
        />
        {errors.fullname?.message && <p>Digite seu nome completo</p>}
        <input
          type="text"
          placeholder="Coloque seus e-mails (separe por vírgula)"
          {...register("emails", { value: contact?.emails })}
        />
        {errors.emails?.message && (
          <p>Coloque um ou mais e-mails separados por vírgula</p>
        )}
        <input
          type="text"
          placeholder="Coloque seus telefones (separe por vírgula)"
          {...register("phones", { value: contact?.phones })}
        />
        {errors.phones?.message && (
          <p>Coloque um ou mais telefones separados por vírgula</p>
        )}
        <button>Confirmar alterações</button>
      </form>
      <button onClick={() => history.push('/contact/detail')}>
        Retornar as detalhes
      </button>
      <button onClick={() => history.push("/user")}>
        Voltar a página principal
      </button>
    </>
  );
}
