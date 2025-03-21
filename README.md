# React Blog

Este é um projeto criado com [Next.js](https://nextjs.org), utilizando [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app) como base. Além disso, foram integradas tecnologias modernas como React, TypeScript, Supabase API, e uma abordagem cuidadosa de design para garantir uma excelente experiência ao usuário.

## Descrição do Projeto

O **React Blog** foi desenvolvido para facilitar a navegação e a leitura de notícias, com as seguintes funcionalidades:

- **Página Inicial**:
  - Título do blog em destaque.
  - Um carrossel exibindo até 4 BigCards de forma automática.
  - Botões abaixo do carrossel para manipular e acessar notícias rapidamente.
  - Três SmallCards adicionais para destacar mais conteúdos relevantes.
- **Página da Notícia**:
  - Apresentação completa do conteúdo da notícia.
  - Três SmallCards adicionais para sugerir leituras relacionadas.
- **Tags**:
  - Cada card possui tags associadas para facilitar a busca e organização.
  - Barra de pesquisa para encontrar notícias relacionadas a uma tag específica.
  - Ao clicar em uma tag, o usuário é redirecionado a uma página com todas as notícias relacionadas.
- **Responsividade**:
  - Totalmente responsivo para desktops e dispositivos móveis, garantindo acessibilidade.
- **Header e Footer**:
  - O Header contém um ícone clicável para retornar à página inicial e uma barra de busca.
  - O Footer fornece uma navegação consistente em todas as páginas.

Tudo é gerenciado de forma dinâmica com a API do Supabase.

## Tecnologias Utilizadas

- **Frontend**: ![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB) ![Next](https://img.shields.io/badge/Next-black?style=for-the-badge&logo=next.js&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white).

- **Backend**: ![Supabase](https://img.shields.io/badge/Supabase-3ECF8E?style=for-the-badge&logo=supabase&logoColor=white) API para gerenciamento dinâmico de conteúdo.


- **Design**: Layout responsivo otimizado para diferentes dispositivos.

## Como Iniciar

Siga as etapas abaixo para rodar o projeto localmente:

1. Clone o repositório:

   ```bash
   git clone <URL-DO-SEU-REPOSITÓRIO>
   cd react-blog
2. Instale as dependências:
   ```bash
   npm install
  # ou
  yarn install
  # ou
  pnpm install

3. Execute o servidor de desenvolvimento:
   ```bash
   npm run dev
  # ou
  yarn dev
  # ou
  pnpm dev

4. Abra http://localhost:3000 no navegador para ver o resultado.

Deploy

A forma mais fácil de fazer o deploy do projeto é através da plataforma Vercel, criada pelos desenvolvedores do Next.js.
Confira nossa documentação de deploy do Next.js para mais detalhes.

   
