import { useNavigate } from 'react-router-dom';
import { jugadoresData } from '../data/jugadores';

function Defensas() {
  const navigate = useNavigate();
  const defensas = jugadoresData.filter(j => j.posicion === 'Defensa');

  return (
    <div className="grupo">
      <h2>Defensas</h2>
      <div className="cartas-container">
        {defensas.map((jugador) => (
          <div 
            className="carta" 
            key={jugador.id}
            onClick={() => navigate(`/jugador/${jugador.id}`)}
          >
            <img src={jugador.imagen} alt={jugador.nombre} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Defensas;