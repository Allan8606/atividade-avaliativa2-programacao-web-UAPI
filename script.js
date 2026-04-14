const projetos = [
    {
        titulo: "Ponto Eletrônico",
        descricao: "Este projeto é uma API REST desenvolvida em Java com Spring Boot para gerenciamento de ponto eletrônico de funcionários.",
        link: "https://github.com/Allan8606/ponto-eletronico-springSecurity"
    },
    {
        titulo: "GameReview",
        descricao: "API REST desenvolvida em Java com Spring Boot para cadastro, avaliação e gerenciamento de games.",
        link: "https://github.com/Allan8606/projeto-GameReview"
    },
    {
        titulo: "API de Cadastro de Clientes",
        descricao: "Este projeto é uma API RESTful desenvolvida em Java com Spring Boot, focada no aprendizado de Autenticação e Autorização.",
        link: "https://github.com/Allan8606/cadastro-clientes-springSecurity"
    },
    {
        titulo: "MagicFridgeAI",
        descricao: "MagicFridgeAI é um projeto que utiliza a API Gemini para sugerir receitas baseadas nos itens do banco de dados.",
        link: "https://github.com/Allan8606/MagicFridgeAI-Java10x"
    }
];

function carregarProjetos() {
    const container = document.querySelector('.projetos-detalhes');
    let conteudoTotal = "";

    for (let i = 0; i < projetos.length; i++) {
        const p = projetos[i];

        const htmlCard = `
            <article class="projetos">
                <h3>${p.titulo}</h3>
                <div>
                    <p>${p.descricao}</p>
                    <a href="${p.link}" class="btn" target="_blank">GitHub</a>
                </div>
            </article>
        `;

        conteudoTotal += htmlCard;
    }

    container.innerHTML = conteudoTotal;
}

window.onload = carregarProjetos;
