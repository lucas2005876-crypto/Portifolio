import "./AppSite.css";

function AppSite({ titulo, texto, imagem, linkgh }) {
  return (
    <>
      <h2 className="app-titulo">{titulo}</h2>
      <hr />
      <div className="app">
        <div className="app-txt">
          <p>{texto}</p>
          <a href={linkgh} target="_blank">
            Link do Github
          </a>
        </div>
        <div className="app-img">
          <img src={imagem} alt="imagem do projeto" />
        </div>
      </div>
    </>
  );
}

export default AppSite;
