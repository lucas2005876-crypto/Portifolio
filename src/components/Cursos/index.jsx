import { use, useState } from "react";
import "./Cursos.css";

function Cursos() {
  const conteudos = [
    {
      texto:
        "Estou no quinto semestre do curso de Ciência da Computação na Universidade Feevale, iniciado em 2024, com previsão de conclusão em 2028. Durante a graduação venho adquirindo conhecimentos em diversas áreas da tecnologia da informação, incluindo programação, banco de dados, engenharia de software e processamento de imagens. Esses estudos têm contribuído para o desenvolvimento da minha base teórica e prática na área da computação.",
      imagem: "feevale",
    },
    {
      texto:
        "Como complemento à graduação, também estudo na plataforma Alura, onde realizo cursos voltados para tecnologia e desenvolvimento de software. Por meio desses cursos, venho aprofundando meus conhecimentos principalmente em desenvolvimento front-end, uso de Docker, consumo e criação de APIs, além de outros temas relevantes para o desenvolvimento moderno de aplicações.",
      imagem: "alura",
    },
    {
      texto:
        "Realizei um curso introdutório de redes de computadores pela Cisco Networking Academy em 2025. Mesmo sendo um curso de curta duração, ele foi muito importante para ampliar minha compreensão sobre o funcionamento das redes, protocolos de comunicação e infraestrutura básica da internet.",
      imagem: "cisco",
      ensino: "Cisco Networking Academy",
    },
    {
      texto:
        "Curso de inglês presencial voltado para o desenvolvimento da conversação, gramática e compreensão do idioma. O estudo contínuo do inglês é fundamental na área de tecnologia, pois grande parte da documentação, ferramentas e conteúdos técnicos está disponível nesse idioma.",
      imagem: "eagle",
    },
  ];

  const [index, setIndex] = useState(0);
  const [isMoving, setisMoving] = useState(false);

  function Proximo() {
    setisMoving(true);

    setTimeout(() => {
      setIndex((prev) => (prev === conteudos.length - 1 ? 0 : prev + 1));
      setisMoving(false);
    }, 300);
  }

  return (
    <div className="cursos">
      <div className={`textoCurso  ${isMoving ? "moving" : ""}`}>
        <h2 className="titulo-cursos">Cursos e Certificações:</h2>
        <p>{conteudos[index].texto}</p>
      </div>

      <div
        className={`imgCurso ${conteudos[index].imagem} ${isMoving ? "moving" : ""}`}
      >
        <button onClick={Proximo}>{">"}</button>
      </div>
    </div>
  );
}

export default Cursos;
