function Defensas({ images }) {
  return (
    <div className="grupo">
      <h2>Defensas</h2>
      <div className="cartas-container">
        <div className="carta">
          <img src={images.ospina} alt="David Ospina" />
        </div>
        <div className="carta">
          <img src={images.vargas} alt="Camilo Vargas" />
        </div>
        <div className="carta">
          <img src={images.josecuadrado} alt="José Cuadrado" />
        </div>
        <div className="carta">
          <img src={images.ospina} alt="David Ospina" />
        </div>
        <div className="carta">
          <img src={images.vargas} alt="Camilo Vargas" />
        </div>
        <div className="carta">
          <img src={images.josecuadrado} alt="José Cuadrado" />
        </div>
        <div className="carta">
          <img src={images.josecuadrado} alt="José Cuadrado" />
        </div>
      </div>
    </div>
  );
}

export default Defensas;