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
}
