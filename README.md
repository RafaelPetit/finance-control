
# Sistema de Controle de Finanças Pessoais

## Visão Geral

Este projeto é um sistema de controle de finanças pessoais que permite aos usuários registrar, visualizar, editar e remover receitas e despesas, além de categorizar essas transações. O sistema oferece funcionalidades de login e cadastro de usuários, garantindo a segurança dos dados financeiros.

## Tecnologias Utilizadas

### Frontend
- **ReactJS** com **NextJS**
- **TypeScript** para tipagem estática

### Backend
- **NodeJS** com  **NestJS**
- **MySQL** como banco de dados
- **Prisma** como ORM
- **bcrypt** para criptografia de senhas
- **JWT** para autenticação

## Funcionalidades Principais

1. **Autenticação de Usuários**
   - Registro de novos usuários
   - Login de usuários existentes
   - Criptografia de senhas com bcrypt
   - Autenticação JWT

2. **Gerenciamento de Finanças**
   - Registro de receitas e despesas mensais
   - Edição e remoção de transações
   - Categorias de receitas e despesas
   - Visualização do saldo atual

3. **Interface de Usuário**
   - Design clean e intuitivo
   - Gráficos e relatórios financeiros

## Estrutura do Projeto

### Backend
```
financial-control-backend/
├── dist/
├── node_modules/
├── prisma/
│   ├── migrations/
│   ├── schema.prisma
├── src/
│   ├── auth/
│   ├── expense/
│   ├── income/
│   ├── misc/
│   ├── user/
│   ├── app.module.ts
│   ├── main.ts
├── .env
├── .env.example
```

### Frontend
```
finance-control-ui/
├── app/
│   ├── auth/
│   ├── dashboard/
│   ├── expense/
│   ├── income/
│   ├── signUp/
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
├── components/
│   ├── card.tsx
│   ├── menu.tsx
│   ├── trackingCards.tsx
```

## Instalação e Execução

### Pré-requisitos
- Node.js
- MySQL

### Backend
1. Clone o repositório
   ```bash
   git clone https://github.com/RafaelPetit/finance-control.git
   cd finance-control
   ```

2. Instale as dependências
   ```bash
   npm install
   ```

3. Configure o banco de dados no arquivo `.env`
   ```typescript
   DATABASE_URL="mysql://user:password@localhost:3306/data-base"
   ```

4. Inicie o servidor
   ```bash
   npm run start
   ```

### Frontend
1. Clone o repositório
   ```bash
   git clone https://github.com/RafaelPetit/finance-control.git
   cd finance-control
   ```

2. Instale as dependências
   ```bash
   npm install
   ```

3. Inicie o aplicativo
   ```bash
   npm run dev -- -p 3001
   ```

## Contato

Autor - (Rafael Petit) - rpetit.dev@gmail.com

Link do Projeto: [https://github.com/RafaelPEtit/finance-control](https://github.com/RafaelPetit/finance-control)
