# API Node JS


<div align="center">
  
`API de cadastro de clientes em Node JS, criada no curso de Desenvolvedor ReactJS do AvançaTech`
  
![NodeJS](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)

![NodeJS](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)

</div>

## Índice
=================
<!--ts-->
* [Título](#API--Node-JS)
* [Índice](#índice)
* [Proposta do projeto](#proposta-do-projeto)
* [Tecnologias](#tecnologias)
* [Status do projeto](#status-do-projeto)
* [Agradecimentos](#agradecimentos)
* [Autor](#autor)
<!--te-->

# Tecnologias
- Linguagem
  - [Javascript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
  - [Node JS](https://nodejs.org)
- Bibliotecas
  - [Nodemon](https://www.npmjs.com/package/nodemon)
- ORM
  - [Prisma](https://www.prisma.io/)
- FrameWork
  - [Express](https://expressjs.com/pt-br/)
- SGBD
  - [SQLite](https://www.sqlite.org/)  

## Tabelas do Banco de dados
- Cliente
  - `id TEXT @UUID`
  - `nome TEXT`
  - `telefone TEXT`
  - `email TEXT  @unique`
  - `endereco TEXT`
  - `idade Int @NULL`
  - `createdAt DateTime @default(now())`

# Status do projeto
🚧Em construção🚧

⚠️A porta padrão esta em `3000`, para alterar basta alterar a variavel PORT em server.js ⚠️

Funcionalidades prontas:
- Listar Clientes:
-   GET: `localhost:${PORT}/clientes`
- Cadastrar Cliente:
-   POST: `localhost:${PORT}/clientes/`
  - body: `{
               nome,
               telefone,
               email,
               endereco
            }`    
- Atualizar Cliente:
  - POST `localhost:${PORT}/clientes/${id}`
    - body: `{
               nome,
               telefone,
               email,
               endereco
            }`

- Deletar Cliente:
  - DELETE `localhost:${PORT}/clientes/${id}`
## Agradecimentos
Agradeço ao professor: <strong>Thiago</strong>, do curso de desenvolvimento em ReactJS do AvançaTech.

## Autor

<div align="center">
<a href="https://www.linkedin.com/in/thiago-antenor/">
<img style="border-radius: 50%;" src="https://avatars.githubusercontent.com/u/99970279?v=4" width="100px;" alt="foto do autor"/>
 <br />
 <sub><b>Thiago Silva Antenor</b></sub></a> <a href="https://www.linkedin.com/in/thiago-antenor/" title="Linkedin"> 🧑🏾‍💻</a>


Feito por Thiago Silva Antenor 👨🏾‍💻 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-Thiago-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thiago-antenor/)](https://www.linkedin.com/in/thiago-antenor/) 
[![Gmail Badge](https://img.shields.io/badge/-thiagoantenor31@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:thiagoantenor31.com)](mailto:thiagoantenor31.com)
</div>
