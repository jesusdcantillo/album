import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './componentes/Home';
import DetalleJugador from './componentes/DetalleJugador';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jugador/:id" element={<DetalleJugador />} />
      </Routes>
    </Router>
  );
}

export default App;
