import React from "react";

export default function Register() {
  return (
    <>
      <h2>Cadastro</h2>
      <input type="text" placeholder="Nome Completo" />
      <input type="text" placeholder="Username" />
      <input type="text" placeholder="Senha" />
      <div>
        <div>
        <input type="text" placeholder="Email" />
        </div>
        <button>Adicionar Email</button>
      </div>
      <div>
        <div>
        <input type="text" placeholder="Telefone" />
        </div>
        <button>Adicionar Telefone</button>
      </div>
      <button>Cadastrar</button>
      <div>
      <p>Já possui cadastro? Faça o</p>
      <button>Login</button>
      </div>
      
    </>
  );
}
