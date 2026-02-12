import { useNavigate } from 'react-router-dom';
import { jugadoresData } from '../data/jugadores';

function Arqueros() {
  const navigate = useNavigate();
  const arqueros = jugadoresData.filter(j => j.posicion === 'Arquero');

  return (
    <div className="grupo">
      <h2>Arqueros</h2>
      <div className="cartas-container">
        {arqueros.map((jugador) => (
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

export default Arqueros;