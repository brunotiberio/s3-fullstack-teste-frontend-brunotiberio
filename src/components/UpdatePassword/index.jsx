import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";

export default function UpdatePassword() {
  const { userLoggedData, editUser } = useContext(UserContext);

  const {
    register,
    handleSubmit, // eslint-disable-next-line
    formState: { errors },
  } = useForm({});

  const onSubmit = (data) => {
    editUser(userLoggedData?.id, data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="password"
          placeholder="Digite uma nova senha"
          {...register("password")}
        />
        <button>Alterar senha</button>
      </form>
    </>
  );
}
