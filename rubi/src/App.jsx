import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Formulario } from './componentes/Formulario';
import { Home } from './componentes/Home';

import { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={!user ? <Formulario setUser={setUser} /> : <Home user={user} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;


