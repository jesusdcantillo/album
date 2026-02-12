import "./App.css";
import Arqueros from "./componentes/Arqueros";
import Defensas from "./componentes/Defensas";
import Volantes from "./componentes/Volantes";
import Delanteros from "./componentes/Delanteros";

const images = {
  ospina: new URL("./img/ospina.jpg", import.meta.url).href,
  vargas: new URL("./img/vargas.jpg", import.meta.url).href,
  josecuadrado: new URL("./img/josecuadrado.jpg", import.meta.url).href,
};

function App() {
  return (
    <>
      <h1>Selección Colombia 2018</h1>
      <Arqueros images={images} />
      <Defensas images={images} />
      <Volantes images={images} />
      <Delanteros images={images} />
    </>
  );
}

export default App;
