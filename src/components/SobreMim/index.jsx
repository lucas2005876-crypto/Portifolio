import Cursos from "../Cursos";
import Linguagens from "../Linguagens";
import "./SobreMim.css";

function SobreMim() {
  return (
    <div className="sobre-mim" id="sobre-mim">
      <Cursos isSM={true}></Cursos>
      <Cursos></Cursos>
      <Linguagens></Linguagens>
    </div>
  );
}

export default SobreMim;
