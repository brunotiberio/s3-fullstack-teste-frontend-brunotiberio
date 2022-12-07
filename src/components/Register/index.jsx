import React, { useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import { useHistory } from "react-router-dom";
import { StyledContainerRegister } from "./style";

export default function Register() {
  const { userCreate } = useContext(UserContext);
  const history = useHistory();

  const formSchema = yup.object().shape({
    fullname: yup.string().required("Nome é obrigatório"),
    username: yup.string().required("Nome de usuário é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
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
    userCreate(formData);
  };

  return (
    <StyledContainerRegister>
      <h2>Cadastro</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          placeholder="Nome Completo"
          {...register("fullname")}
        />
        {errors.fullname?.message && <p>Digite seu nome completo</p>}
        <input
          type="text"
          placeholder="Nome de usuário"
          {...register("username")}
        />
        {errors.username?.message && <p>Nome de usuário é obrigatório</p>}
        <input type="password" placeholder="Senha" {...register("password")} />
        {errors.password?.message && <p>Digite uma senha</p>}
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
        <button>Cadastrar</button>
      </form>
      <div>
        <p>Já possui cadastro? Faça o Login</p>
        <button onClick={() => history.push("/")}>Login</button>
      </div>
    </StyledContainerRegister>
  );
}
