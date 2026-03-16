import { useState } from "react";
import "./Header.css";

function Header() {
  const [tema, setTema] = useState(true);

  function trocarTema() {
    if (tema) {
      setTema(false);
      document.body.classList.add("tema-escuro");
    } else {
      setTema(true);
      document.body.classList.remove("tema-escuro");
    }
  }

  return (
    <div className="header-page">
      <button onClick={trocarTema} className={`botaoTema ${tema ? "claro" : "escuro"}`}></button>
      <div className="links-header">
        <a href="#sobre-mim">Sobre mim</a>
        <a href="#projetos">Projetos</a>
        <a href="#contatos">Contatos</a>
      </div>
    </div>
  );
}

export default Header;
