/*
import "./Formulario.css"
import { useState } from "react"

export function Formulario( setUser ) {
    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)

    const handlesubmit = (e) => {
        e.preventDefault()

        if (nombre === "" || contraseña === "") {
            setError(true)
            return
        }
        setError(false)
        setUser([nombre])  // Este setUser ahora debería actualizar el estado en App
    }

    return (
        <section>
            <h1>Login</h1>

            <form 
                className="formulario"
                onSubmit={handlesubmit}
            >
                <input 
                    type="text" 
                    value={nombre}
                    placeholder="Nombre"
                    onChange={e => setNombre(e.target.value)}
                />
                <input 
                    type="password" 
                    value={contraseña}
                    placeholder="Contraseña"
                    onChange={e => setContraseña(e.target.value)}
                />
                <button type="submit">Iniciar Sesion</button>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}
        </section>
    )
}   */
// formulario.jsx
// formulario.jsx
/*
import "./Formulario.css"
import { useState } from "react"

export function Formulario({ setUser }) {  // Asegúrate de desestructurar `setUser`
    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)

    const handlesubmit = (e) => {
        e.preventDefault()

        if (nombre === "" || contraseña === "") {
            setError(true)
            return
        }
        setError(false)
        setUser([nombre])  // Usar setUser correctamente
    }

    return (
        <section>
            <h1>Login</h1>
            <form 
                className="formulario"
                onSubmit={handlesubmit}
            >
                <input 
                    type="text" 
                    value={nombre}
                    placeholder="Nombre"
                    onChange={e => setNombre(e.target.value)}
                />
                <input 
                    type="password" 
                    value={contraseña}
                    placeholder="Contraseña"
                    onChange={e => setContraseña(e.target.value)}
                />
                <div className="boton_form"> 
                <button type="submit">Iniciar Sesion</button>
                <button type="submit">Registrar </button>
                </div>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}
        </section>
    )
}
    */

import "./Formulario.css"
import { useState } from "react"
import PropTypes from 'prop-types'  // Importa PropTypes

export function Formulario({ setUser }) {
    const [nombre, setNombre] = useState("")
    const [contraseña, setContraseña] = useState("")
    const [error, setError] = useState(false)

    const handlesubmit = (e) => {
        e.preventDefault()

        if (nombre === "" || contraseña === "") {
            setError(true)
            return
        }
        setError(false)
        setUser([nombre])
    }

    return (
        <section>
            <h1>Login</h1>
            <form 
                className="formulario"
                onSubmit={handlesubmit}
            >
                <input 
                    type="text" 
                    value={nombre}
                    placeholder="Nombre"
                    onChange={e => setNombre(e.target.value)}
                />
                <input 
                    type="password" 
                    value={contraseña}
                    placeholder="Contraseña"
                    onChange={e => setContraseña(e.target.value)}
                />
                <button type="submit">Iniciar Sesion</button>
            </form>
            {error && <p>Todos los campos son obligatorios</p>}
        </section>
    )
}

// Validación de PropTypes para setUser
Formulario.propTypes = {
    setUser: PropTypes.func.isRequired
}

