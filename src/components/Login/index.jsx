import React, { useContext } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { UserContext } from "../../contexts/UserContext";
import { useHistory } from "react-router-dom";
import { StyledContainer } from "./style";

export default function Login() {


  const { userLogin } = useContext(UserContext);
  const history = useHistory();

  const formSchema = yup.object().shape({
    username: yup.string().required("Nome de usuário é obrigatório"),
    password: yup.string().required("Senha é obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmit = (data) => {
    userLogin(data);
  };
  return (    
    <StyledContainer>
    <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        
        <input type="text" placeholder="Username" {...register("username")} />
        {errors.username?.message && <p>Digite seu nome de usuário</p>}

        <input type="password" placeholder="Senha" {...register("password")} />
        {errors.password?.message && <p>Digite sua senha</p>}

        <button>Login</button>
      </form>
      <div>
        <p>Não possui cadastro?</p>
        <button onClick={() => history.push("/register")}>Cadastre-se</button>
      </div>
      </StyledContainer>
    
  );
}
