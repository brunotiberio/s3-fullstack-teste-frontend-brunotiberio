import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import { useHistory } from "react-router-dom";
import UpdatePassword from "../UpdatePassword";

export default function UserEdit() {
  const { userLoggedData, editUser, deleteUser } = useContext(UserContext);
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    const formData = data;

    if (formData.emails.length !== userLoggedData.emails.length) {
      formData.emails = formData.emails.replace(" ", "").split(",");
    }

    if (formData.phones.length !== userLoggedData.phones.length) {
      formData.phones = formData.phones.replace(" ", "").split(",");
    }

    editUser(userLoggedData?.id, formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Nome Completo"
          {...register("fullname", { value: userLoggedData?.fullname })}
        />
        {errors.fullname?.message && <p>Digite seu nome completo</p>}
        <input
          type="text"
          placeholder="Nome de usuário"
          {...register("username", { value: userLoggedData?.username })}
        />
        {errors.username?.message && <p>Nome de usuário é obrigatório</p>}
        <input
          type="text"
          placeholder="Coloque seus e-mails (separe por vírgula)"
          {...register("emails", { value: userLoggedData?.emails })}
        />
        {errors.emails?.message && (
          <p>Coloque um ou mais e-mails separados por vírgula</p>
        )}
        <input
          type="text"
          placeholder="Coloque seus telefones (separe por vírgula)"
          {...register("phones", { value: userLoggedData?.phones })}
        />
        {errors.phones?.message && (
          <p>Coloque um ou mais telefones separados por vírgula</p>
        )}
        <button>Confirmar alterações</button>
      </form>
      <UpdatePassword />
      <button onClick={() => deleteUser(userLoggedData?.id)}>
        Excluir todos os meus dados
      </button>
      <button onClick={() => history.push("/user")}>
        Voltar a página principal
      </button>
    </>
  );
}
