import React from "react";

export default function Login() {
  return (
    <>
      <h2>Login</h2>
      <input type="text" placeholder="Username" />
      <input type="text" placeholder="Senha" />
      <button>Login</button>
      <div>
        <p>Não possuo cadastro?</p>
        <button>Cadastre-se</button>
      </div>
    </>
  );
}
