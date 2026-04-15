function ProjetoCard({ titulo, descricao, link }) {
    return (
        <article className="projetos">
            <h3>{titulo}</h3>
            <div>
                <p>{descricao}</p>
                <a href={link} className="btn" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </article>
    );
}

export default ProjetoCard;
