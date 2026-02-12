import { useNavigate } from 'react-router-dom';
import { jugadoresData } from '../data/jugadores';

function Volantes() {
  const navigate = useNavigate();
  const volantes = jugadoresData.filter(j => j.posicion === 'Volante');

  return (
    <div className="grupo">
      <h2>Volantes</h2>
      <div className="cartas-container">
        {volantes.map((jugador) => (
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

export default Volantes;