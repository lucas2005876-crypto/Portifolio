import "./App.css";
import Contatos from "./components/Contatos";
import FotoLucas from "./components/FotoLucas";
import Projetos from "./components/Projetos";
import SobreMim from "./components/SobreMim";

function App() {
  return (
    <>
      <FotoLucas></FotoLucas>
      <SobreMim></SobreMim>
      <Projetos></Projetos>
      <Contatos></Contatos>
    </>
  );
}

export default App;
