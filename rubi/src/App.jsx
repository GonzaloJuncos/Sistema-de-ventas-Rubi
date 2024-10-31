import { Formulario } from './componentes/Formulario'
import { Home } from './componentes/home'
import { useState } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState([])

  return (
    <div className="App">
      {
        user.length === 0
          ? <Formulario setUser={setUser} />
          : <Home />
      }
    </div>
  )
}

export default App
