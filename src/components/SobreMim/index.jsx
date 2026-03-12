import Conteudo from "../Conteudo";
import Cursos from "../Cursos";
import Linguagens from "../Linguagens";
import "./SobreMim.css";

function SobreMim() {
  return (
    <div className="sobre-mim" id="sobre-mim">
      <div className="container">
        <h2 className="titulo-SM">Sobre Mim:</h2>
        <Conteudo></Conteudo>
      </div>
      <Cursos></Cursos>
      <Linguagens></Linguagens>
    </div>
  );
}

export default SobreMim;
