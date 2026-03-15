import "./Contatos.css";
import { Header } from "../Header";

function Contatos() {


  
  return (
    <div className="contatos" id="contatos">
      <h3>Currículo</h3>
      <a href="/Crr_LucasSantos.pdf" target="_blank" className="download">
        Download
      </a>

      <h3>Redes Sociais</h3>
      <div className="redes">
        <a
          href="https://www.linkedin.com/in/lucas-santos-dev-em-treinamento/"
          target="_blank"
        >
          <img className="iconRedes" src="/redes/in.png" />
        </a>

        <a href="https://github.com/lucas2005876-crypto" target="_blank">
          <img className="iconRedes" src="/redes/gihu.png" />
        </a>

        <a
          href="https://www.instagram.com/lucasss.oliveira?igsh=dXpnbW9uam80eGQ="
          target="_blank"
        >
          <img className="iconRedes" src="/redes/insta.png" />
        </a>
      </div>
    </div>
  );
}

export default Contatos;
