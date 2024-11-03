import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Formulario } from './componentes/Formulario';
import { Home } from './componentes/Home';
import Usuarios from './componentes/Usuarios'; // Import correcto
import { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={!user ? <Formulario setUser={setUser} /> : <Home user={user} />} />
          <Route path="/usuarios" element={<Usuarios />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
