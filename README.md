
# Sistema de Controle de Finanças Pessoais

## Visão Geral

Este projeto é um sistema de controle de finanças pessoais que permite aos usuários registrar, visualizar, editar e remover receitas e despesas, além de categorizar essas transações. O sistema oferece funcionalidades de login e cadastro de usuários, garantindo a segurança dos dados financeiros.

## Tecnologias Utilizadas

### Frontend
- **ReactJS** com **NextJS** ou **React Native** com **Expo**
- **TypeScript** para tipagem estática

### Backend
- **NodeJS** com **ExpressJS** ou **NestJS**
- **MySQL** como banco de dados
- **TypeORM** ou **Prisma** como ORM
- **bcrypt** para criptografia de senhas
- **JWT** para autenticação

## Funcionalidades Principais

1. **Autenticação de Usuários**
   - Registro de novos usuários
   - Login de usuários existentes
   - Criptografia de senhas com bcrypt
   - Autenticação JWT

2. **Gerenciamento de Finanças**
   - Registro de receitas e despesas
   - Edição e remoção de transações
   - Categorias de receitas e despesas
   - Visualização do saldo atual e histórico de transações

3. **Interface de Usuário**
   - Design clean e intuitivo
   - Gráficos e relatórios financeiros

## Estrutura do Projeto

### Backend
```
finance-control/
│
├── src/
│   ├── controllers/
│   ├── entities/
│   ├── middlewares/
│   ├── routes/
│   ├── services/
│   ├── index.ts
│   └── ormconfig.ts
│
├── package.json
└── tsconfig.json
```

### Frontend
```
finance-control-frontend/
│
├── public/
├── src/
│   ├── components/
│   ├── pages/
│   ├── services/
│   ├── styles/
│   ├── App.tsx
│   └── index.tsx
│
├── package.json
└── tsconfig.json
```

## Instalação e Execução

### Pré-requisitos
- Node.js
- MySQL

### Backend
1. Clone o repositório
   ```bash
   git clone https://github.com/seuusuario/finance-control.git
   cd finance-control
   ```

2. Instale as dependências
   ```bash
   npm install
   ```

3. Configure o banco de dados no arquivo `src/ormconfig.ts`
   ```typescript
   import { DataSource } from 'typeorm';
   import { User } from './entities/User';
   import { Transaction } from './entities/Transaction';

   export const AppDataSource = new DataSource({
       type: "mysql",
       host: "localhost",
       port: 3306,
       username: "your_username",
       password: "your_password",
       database: "finance_control",
       entities: [User, Transaction],
       synchronize: true,
       logging: true,
   });
   ```

4. Inicie o servidor
   ```bash
   npm run start
   ```

### Frontend
1. Clone o repositório
   ```bash
   git clone https://github.com/seuusuario/finance-control-frontend.git
   cd finance-control-frontend
   ```

2. Instale as dependências
   ```bash
   npm install
   ```

3. Inicie o aplicativo
   ```bash
   npm run dev
   ```

## Contato

Autor - (Rafael Petit) - rpetit.dev@gmail.com

Link do Projeto: [https://github.com/RafaelPEtit/finance-control](https://github.com/RafaelPetit/finance-control)
