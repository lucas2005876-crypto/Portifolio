import "./Header.css";

function Header() {
  return (
    <div className="header-page">
      <p>Feito em React 18</p>
      <div className="links-header">
        <a href="#sobre-mim">Sobre mim</a>
        <a href="#projetos">Projetos</a>
        <a href="#contatos">Contatos</a>
      </div>
    </div>
  );
}

export default Header;
