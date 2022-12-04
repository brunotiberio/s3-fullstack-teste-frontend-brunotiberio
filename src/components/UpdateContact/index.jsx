import React from "react";

export default function UpdateContact() {
  return (
    <>
      <h2>Atualizar contato</h2>
      <input placeholder="o nome ja vai estar mostrando no input"></input>
      <div>
        <div>
          {/* map para email */}
          <input placeholder="o email ja vai estar mostrando no input"></input>
          <button>Excluir email</button>
        </div>
        <button>Adicionar novo email</button>
      </div>
      <div>
        <div>
          {/* map para telefone */}
          <input placeholder="o telefone ja vai estar mostrando no input"></input>
          <button>Excluir telefone</button>
        </div>
        <button>Adicionar novo telefone</button>
      </div>
      <button>Atualizar Contato</button>
    </>
  );
}

// usado para fazer o map dos contatos
