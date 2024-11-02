/*
import { Formulario } from './componentes/Formulario'
import { Home } from './componentes/Home'
import { useState } from 'react'
import './App.css'

function App() {  

  const [user, setUser] = useState([])

  return (
    <div className="App">
      {
        !user.length > 0
        ? <Formulario setUser={setUser} />
        : <Home user={user}/>
      }
      
      
    </div>
  )
}

export default App
*/
// App.jsx
// App.jsx
/*
funciona normal hasta aqui
import { Formulario } from './componentes/Formulario'
import { Home } from './componentes/Home'
import { useState } from 'react'
import './App.css'

function App() {  
  const [user, setUser] = useState([])

  return (
    <div className="App">
      {
        user.length === 0
        ? <Formulario setUser={setUser} />
        : <Home user={user} setUser={setUser}/>
      }
    </div>
  )
}     

export default App
*/
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Formulario } from './componentes/Formulario';
import { Home } from './componentes/Home';
import { RegistrarEmpleado } from "./componentes/RegistrarEmpleado"; // Componente para agregar usuarios
// Descomentar cuando los componentes estén listos
// import { EditarEmpleado } from './componentes/EditarEmpleado'; // Componente para editar empleados
// import { BorrarEmpleado } from './componentes/BorrarEmpleado'; // Componente para borrar empleados
// import { Balance } from './componentes/Balance'; // Componente para balance
// import { Stock } from './componentes/Stock'; // Componente para stock
import { useState } from 'react';
import './App.css';

function App() {
  const [user, setUser] = useState(null); // Inicializa como null para manejar el inicio de sesión

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Ruta principal que muestra el formulario si no hay usuario o la página de inicio si hay un empleado */}
          <Route path="/" element={!user ? <Formulario setUser={setUser} /> : <Home user={user} />} />
          
          {/* Rutas para funciones administrativas, solo accesibles para admins */}
          {user && user.role === "admin" && ( // Verifica si el usuario es admin
            <>
              <Route path="/registrar-empleado" element={<RegistrarEmpleado />} />
              {/* Descomentar cuando los componentes estén listos */}
              {/* <Route path="/editar-empleado" element={<EditarEmpleado />} />
              <Route path="/borrar-empleado" element={<BorrarEmpleado />} />
              <Route path="/balance" element={<Balance />} />
              <Route path="/stock" element={<Stock />} /> */}
            </>
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
