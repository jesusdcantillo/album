import { useParams, useNavigate } from "react-router-dom";
import { jugadoresData } from "../data/jugadores";

function DetalleJugador() {
    const { id } = useParams();
    const navigate = useNavigate();

    const jugador = jugadoresData.find((j) => j.id === id);


    if (!jugador) {
        return (
            <div className="detalle-container">
                <h1>Jugador no encontrado.</h1>
                <button onClick={() => navigate('/')}>Volver al menú</button>
            </div>
        )
    }

    return (
        <div className="detalle-container">
            <button className="boton-volver" onClick={() => navigate('/')}>
                Volver al menú
            </button>

            <div className="detalle-jugador">
                <img src={jugador.imagen} alt={jugador.nombre} className="imagen-principal"/>
                <div className="info-jugador">
                    <h1>{jugador.nombre}</h1>
                    <p><strong>Posición:</strong> {jugador.posicion}</p>
                    <p><strong>Dorsal:</strong> {jugador.dorsal}</p>
                    <p><strong>Edad:</strong> {jugador.edad}</p>
                    <p><strong>Club:</strong> {jugador.club}</p>
                </div>
            </div>
        </div>
    );
}

export default DetalleJugador;