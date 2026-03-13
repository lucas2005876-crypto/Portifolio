import { useState } from "react";
import "./Conteudo.css";

function Conteudo() {
  const sobremim = [
    {
      texto:
        "Sou estudante de Ciência da Computação e entusiasta do desenvolvimento de software. Tenho interesse em desenvolvimento front-end e back-end. Estou buscando sempre aprender novas tecnologias e aprimorar minhas habilidades.",
      imagem: "img1",
    },
    {
      texto:
        "Também possuo interesse em desenvolvimento de jogos e banco de dados, áreas nas quais já tive contato durante meus estudos e projetos pessoais.",
      imagem: "img2",
    },
    {
      texto:
        "Atualmente, estou em busca de uma oportunidade no mercado de trabalho onde eu possa continuar aprendendo, evoluir como desenvolvedor e aplicar meus conhecimentos para contribuir com bons resultados em equipe e em projetos reais.",
      imagem: "img3",
    },
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  function Proximo() {
    setFade(true);

    setTimeout(() => {
      if (index === conteudos.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
      setFade(false);
    }, 300);
  }

  return (
    <div className={`conteudo ${fade ? "fade" : ""}`}>
      <div className="esquerda">
        <h2 className="titulo-SM">Sobre Mim:</h2>
        <p>{conteudos[index].texto}</p>
      </div>

      <div className="direita">
        <div className={`imagemContainer ${conteudos[index].imagem}`}></div>
      </div>
    </div>
  );
}

export default Conteudo;
