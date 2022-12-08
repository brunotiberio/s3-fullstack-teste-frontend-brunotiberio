# Agenda - Teste Técnico Fullstack S3

## Sumário

- [Agenda - Teste Técnico Fullstack S3](#agenda---teste-técnico-fullstack-s3)
  - [Sumário](#sumário)
  - [1. Resumo](#1-resumo)
  - [Resumo](#resumo)
    - [1. Desenvolvedor](#1-desenvolvedor)
  - [2. Preparativos](#2-preparativos)
    - [2.1. Instalando Dependências](#21-instalando-dependências)
    - [2.2. Executar a aplicação localmente](#22-executar-a-aplicação-localmente)
  - [3. Documentação da API da aplicação](#3-documentação-da-api-da-aplicação)
  - [4. Histórico de desenvolvimento](#4-histórico-de-desenvolvimento)
    - [4.1. Objetivo](#41-objetivo)
    - [4.2. Decisões de desenvolvimento](#42-decisões-de-desenvolvimento)
      - [4.2.1. Ordem de desenvolvimento](#421-ordem-de-desenvolvimento)
      - [4.2.2. Componentes](#422-componentes)
      - [4.2.3. Page](#423-page)
      - [4.2.4. Rotas e Consumo da API](#424-rotas-e-consumo-da-api)
      - [4.2.4.1. Rotas](#4241-rotas)
      - [4.2.4.2. Consumo da API](#4242-consumo-da-api)
    - [4.2.5. Estilização](#425-estilização)
  - [5. Agradecimentos](#5-agradecimentos)
- [Shalom!](#shalom)

---

## 1. Resumo

## Resumo

[ Voltar ao topo ](#sumário)

Essa aplicação foi desenvolvida para o teste técnico realizado na sprint 3 do módulo 6 para a Kenzie Academy Brasil no intuito de revisar e treinar testes técnicos para o mercado de trabalho.

O objetivo dessa aplicação é servir como um backend para o projeto fullstack de uma Agenda.

**Frontend**
- [Frontend Deploy](https://agenda-teste-tecnico.vercel.app/)
- [Frontend Repositório](https://github.com/brunotiberio/s3-fullstack-teste-frontend-brunotiberio)

**Backend**
- [Backend Documentação: Rotas e requisições](https://doc-fullstack-m6.vercel.app)
- [Backend Repositório](https://github.com/brunotiberio/s3-fullstack-teste-backend-brunotiberio)

Tecnologias usadas nesse projeto:

- [React](https://pt-br.reactjs.org/docs/getting-started.html)
- [Styled-components](https://styled-components.com)
- [Toastfy](https://www.npmjs.com/package/react-toastify)
- [React-hook-form](https://react-hook-form.com)
- [Axios](https://axios-http.com/ptbr/docs/intro)
- [React-router-dom](https://v5.reactrouter.com/web/guides/quick-start)
- [Eslint](https://eslint.org)

**Base URL do deploy: colocar o link do vercel aqui**

### 1. Desenvolvedor

> - [Bruno Tibério Santinoni de Oliveira](https://github.com/brunotiberio)

---

## 2. Preparativos

[ Voltar ao topo ](#sumário)

### 2.1. Instalando Dependências

Clone o projeto em sua máquina local e instale por meio do yarn ou npm:

```shell
yarn install
```

```shell
npm install
```

### 2.2. Executar a aplicação localmente

Para executar o projeto em sua máquina local utilize o comando **start** do yarn ou npm:

```shell
yarn start
```

```shell
npm start
```

OBS: Não se esqueça de executar a aplicação de backend para que tudo funcione corretamente, use esse link para ter acesso a ela: https://github.com/brunotiberio/s3-fullstack-teste-backend-brunotiberio

## 3. Documentação da API da aplicação

É possível acessar à documentação completa da API utilizada nessa aplicação.

Nessa mesma documentação é possível adquirir informações sobre os requests, chaves necessárias do request e informações de algumas rotas.

**Base URL da API: https://doc-fullstack-m6.vercel.app**

## 4. Histórico de desenvolvimento

### 4.1. Objetivo

O Objetivo principal dessa aplicação é a validação dos meus conhecimentos nos seguintes tópicos:

- JavaScript;
- React;
- TypeScript;
- Componentização;
- CSS;

### 4.2. Decisões de desenvolvimento

#### 4.2.1. Ordem de desenvolvimento

1. Inicialmente, decidi por começar pela análise do teste proposto, com isso, pude observar e pesquisar quais eram as tecnologias, frameworks e libs que poderiam ser usadas no desenvolvimento.
2. Iniciei pelo backend, criando a arquitetura do servidor
   1. Interfaces e Entities;
   2. Middlewares
   3. Services e Controllers
   4. Routes
   5. Error e tratamentos
3. Depois, trabalhei no frontend da aplicação.
4. Por fim, fiz os demais fix necessários do código e a documentação da API

#### 4.2.2. Componentes

Foram criados, no total, 11 componentes:

- Header: cabeçalho da aplicação, onde é recebido o H1;
- Main: corpo da aplicação, onde é recebido por "children" todo o conteúdo base da aplicação;
- ContactDetail: componente responsável enviar os detalhes de um contato;
- ContactEdit: responsável pela parte da edição de um contato;
- Contacts: responsável pela renderização dos contatos;
- CreateContact: responsável pela criação dos contatos;
- Login: responsável pelo login e envio das informações em localstorage;
- PeronalData: responsável por renderizar os dados pessoais;
- Register: responsável pelo registro de um usuário;
- UpdatePassword: responsável pela alteração de senha de um usuário;
- UserEdit: responsável pelo edição dos dados de um usuário

#### 4.2.3. Page

Ao total, foram criadas 7 páginas para a construção da aplicação, sendo a página inicial, a que possui o componente de Login. As demais páginas são relacionadas ao CRUD de Usuário e Contatos

#### 4.2.4. Rotas e Consumo da API

#### 4.2.4.1. Rotas

Para o desenvolvimento dessa aplicação, foram necessárias 7 rotas, duas delas (Login e Register) acessadas de forma pública, já as demais rotas só podem ser acessadas caso o usuário esteja logado. Para fazer essa proteção foram criadas nas pages um ternário que verifica se o token existe no localstorage (que é armazenado quando o usuário faz login), caso positivo a página é liberada, caso negativo, o usuário é redirecionado a página de Login.

#### 4.2.4.2. Consumo da API

A configuração da API ocorre em "services", utilizando a tecnologia "Axios", com a baseURL da API e um timeout de 8000 milissegundos (pois a resposta da API é praticamente instantânea)

Os possíveis erros da API (internal server error, timeout) foram tratados no catch da requisição, no "context", utilizando o Toastfy e retornando uma mensagem ao usuário.

Para os dados trafegarem pelos componentes, decidi usar o contextAPI do próprio React, por ser mais simples de se configurar e escalar a aplicação, a ferramenta permite a criação de um estado com as respostas da API, dessa forma, eu consigo enviar os dados gerados por ela, para o componente, tratando os possíveis erros de entrada do usuário e de resposta da API e gerando os resultados esperados da API.

### 4.2.5. Estilização

Utilizei como ferramenta de estilização o Styled-Components, por se tratar de uma ferramenta completa. Dessa forma, criei um reset global para facilitar a estilização e pude criar componentes estilizados. Não utilizei nenhum tipo de "pre-render css" como Material UI ou Chakra, usando ao máximo meus conhecimentos em CSS e HTML.

## 5. Agradecimentos

Quero agradecer por essa oportunidade de poder fazer o teste técnico e espero poder ter conseguido cumprir com boa parte daquilo que foi solicitado

# Shalom!
