import { useState } from "react";
import "./Conteudo.css";

function Conteudo() {
  const conteudos = [
    {
      texto:
        "Sou estudante de Ciência da Computação e entusiasta do desenvolvimento de software. Tenho interesse tanto em desenvolvimento front-end quanto back-end, buscando sempre aprender novas tecnologias e aprimorar minhas habilidades.",
      imagem: "/images/pccode.png",
    },
    {
      texto:
        "Também possuo interesse em desenvolvimento de jogos e banco de dados, áreas nas quais já tive contato durante meus estudos e projetos pessoais.",
      imagem: "/images/datab.png",
    },
    {
      texto:
        "Atualmente, estou em busca de uma oportunidade no mercado de trabalho onde eu possa continuar aprendendo, evoluir como desenvolvedor e aplicar meus conhecimentos para contribuir com bons resultados em equipe e em projetos reais.",
      imagem: "/images/xicara.png",
    },
  ];

  const [index, setIndex] = useState(0);

  function Proximo() {
    if (index === conteudos.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <div className="conteudo">
      <p>{conteudos[index].texto}</p>

      <div className="imgeButton">
        <div className="imagemContainer">
          <img src={conteudos[index].imagem} />
        </div>

        <button onClick={Proximo}>{">"}</button>
      </div>
    </div>
  );
}

export default Conteudo;
