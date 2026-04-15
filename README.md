# Portfólio Pessoal - Migração para React 🚀

Este projeto é um portfólio pessoal moderno desenvolvido como parte da **Atividade Avaliativa 2 da disciplina de Programação Web na UAPI**. O objetivo principal foi realizar a migração de um site estático (HTML/CSS) para o ecossistema **React**, aplicando conceitos fundamentais da biblioteca.

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca principal
- **Vite** - Build tool ultra-rápida
- **JavaScript (ES6+)** - Lógica de programação
- **CSS3** - Estilização personalizada (sem frameworks externos para manter a fidelidade ao design original)
- **Google Fonts** - Tipografia personalizada (Nunito Sans)

## 📋 Requisitos Implementados

Conforme solicitado no desafio, o projeto conta com:

1.  **Componentização:** O portfólio foi dividido em componentes reutilizáveis, incluindo:
    -   `Header`: Gerencia o menu de navegação.
    -   `ProjetoCard`: Molde inteligente para exibir as informações de cada projeto.
2.  **Renderização Dinâmica de Dados:** Implementação de um array de objetos contendo as informações dos projetos, que são mapeados e renderizados automaticamente na interface.

## 📁 Estrutura do Projeto

```text
/
├── public/          # Assets estáticos (imagens e ícones)
├── src/
│   ├── Header.jsx    # Gerenciamento de navegação
│   ├── ProjetoCard.jsx # Molde de projeto
│   ├── App.jsx     # Orquestrador do portfólio
│   ├── index.css    # Estilos globais originais
│   └── main.jsx     # Ponto de entrada do React
├── index.html       # Casca da aplicação (Vite)
└── package.json     # Gerenciamento de dependências
```

## 🚀 Como Executar o Projeto

Para rodar este projeto localmente, siga os passos:

1.  Clone o repositório.
2.  Instale as dependências:
    ```bash
    npm install
    ```
3.  Inicie o servidor de desenvolvimento:
    ```bash
    npm run dev
    ```
4.  Acesse o link gerado no terminal (geralmente `http://localhost:5173`).

---
Desenvolvido por **Allan Isaac** 👋
