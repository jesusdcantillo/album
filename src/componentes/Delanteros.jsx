import { useNavigate } from 'react-router-dom';
import { jugadoresData } from '../data/jugadores';

function Delanteros() {
  const navigate = useNavigate();
  const delanteros = jugadoresData.filter(j => j.posicion === 'Delantero');

  return (
    <div className="grupo">
      <h2>Delanteros</h2>
      <div className="cartas-container">
        {delanteros.map((jugador) => (
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

export default Delanteros;