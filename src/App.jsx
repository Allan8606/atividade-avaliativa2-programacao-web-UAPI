import Header from './Header';
import ProjetoCard from './ProjetoCard';

const meusProjetos = [
  {
    titulo: "Ponto Eletrônico",
    descricao: "API REST desenvolvida em Java com Spring Boot para gerenciamento de ponto eletrônico.",
    link: "https://github.com/Allan8606/ponto-eletronico-springSecurity"
  },
  {
    titulo: "GameReview",
    descricao: "API REST desenvolvida em Java com Spring Boot para cadastro e avaliação de games.",
    link: "https://github.com/Allan8606/projeto-GameReview"
  },
  {
    titulo: "API de Cadastro de Clientes",
    descricao: "API RESTful focada no aprendizado de Autenticação e Autorização com Spring Security.",
    link: "https://github.com/Allan8606/cadastro-clientes-springSecurity"
  },
  {
    titulo: "MagicFridgeAI",
    descricao: "Projeto que utiliza a API Gemini para sugerir receitas baseadas nos itens do banco de dados.",
    link: "https://github.com/Allan8606/MagicFridgeAI-Java10x"
  }
];

function App() {
  return (
    <>
      <Header />

      <main>
        <section id="sobre">
          <h2>Sobre Mim</h2>
          <div className="sobre-conteudo">
            <img src="/img/foto pessoal.png" alt="Foto pessoal" />
            <div className="sobre-texto">
              <p>Olá, eu sou o Allan Isaac, um desenvolvedor back-end que vem se aventurando no front-end. Atualmente estou cursando Sistemas para Internet na Universidade Aberta do Piauí (UAPI).</p>
              <p>Tenho experiência com Java e Spring Boot, trabalhando principalmente com APIs e lógica de negócio. Agora estou me desafiando a aprender front-end, buscando entender melhor a construção de interfaces e a experiência do usuário.</p>
              <p>Gosto de aprender na prática, resolver problemas e evoluir constantemente. Meu objetivo é me tornar um desenvolvedor full-stack, capaz de construir soluções completas e eficientes.</p>
            </div>
          </div>
        </section>

        <section id="projetos">
          <h2>Projetos</h2>
          <div className="projetos-detalhes">
            {meusProjetos.map((projeto, index) => (
              <ProjetoCard
                key={index}
                titulo={projeto.titulo}
                descricao={projeto.descricao}
                link={projeto.link}
              />
            ))}
          </div>
        </section>
      </main>

      <footer>
        <p>Desenvolvido por Allan Isaac</p>
      </footer>
    </>
  )
}

export default App
