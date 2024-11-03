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
   /*
   FUNCIONAAA
import "./Formulario.css";
import { useState } from "react";
import PropTypes from 'prop-types';

export function Formulario({ setUser }) {
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState(false);

    // Datos del usuario administrador
    const adminUser = {
        nombre: "admin",
        contraseña: "admin123"
    };

    const handlesubmit = (e) => {
        e.preventDefault();

        // Verificar si los campos están vacíos
        if (nombre === "" || contraseña === "") {
            setError(true);
            return;
        }

        // Verificar si el usuario y la contraseña coinciden con el administrador
        if (nombre === adminUser.nombre && contraseña === adminUser.contraseña) {
            setError(false);
            setUser({ nombre, role: "admin" });  // Actualiza el estado con el rol de "admin"
        } else {
            setError(true);
        }
    };

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
                <button type="submit">Iniciar Sesión</button>
            </form>
            {error && <p>Usuario o contraseña incorrectos</p>}
        </section>
    );
}

// Validación de PropTypes para setUser
Formulario.propTypes = {
    setUser: PropTypes.func.isRequired
};
*/
/*
import "./Formulario.css";
import { useState } from "react";
import PropTypes from 'prop-types';

export function Formulario({ setUser }) {
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Simulación de credenciales
        const adminCredentials = { name: "Admin", password: "admin123" }; // Cambia según sea necesario
        const userCredentials = { name: "User", password: "user123" }; // Otro empleado

        if (nombre === "" || contraseña === "") {
            setError(true);
            return;
        }

        setError(false);

        // Verificación de credenciales
        if (nombre === adminCredentials.name && contraseña === adminCredentials.password) {
            setUser({ name: nombre, role: "admin" }); // Establecer usuario como admin
        } else if (nombre === userCredentials.name && contraseña === userCredentials.password) {
            setUser({ name: nombre, role: "user" }); // Establecer usuario como empleado
        } else {
            setError(true); // Credenciales incorrectas
        }
    };

    return (
        <section>
            <h1>Login</h1>
            <form className="formulario" onSubmit={handleSubmit}>
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
                <button type="submit">Iniciar Sesión</button>
            </form>
            {error && <p>Todos los campos son obligatorios o credenciales incorrectas.</p>}
        </section>
    );
}

// Validación de PropTypes para setUser
Formulario.propTypes = {
    setUser: PropTypes.func.isRequired
};
*/
// Formulario.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Formulario.css";
import profileIcon from "../assets/profile-icon.png"; // Ruta corregida

export function Formulario({ setUser }) {
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const adminCredentials = { name: "Admin", password: "admin123" };
        const userCredentials = { name: "User", password: "user123" };

        if (nombre === "" || contraseña === "") {
            setError(true);
            return;
        }

        setError(false);

        if (nombre === adminCredentials.name && contraseña === adminCredentials.password) {
            setUser({ name: nombre, role: "admin" });
        } else if (nombre === userCredentials.name && contraseña === userCredentials.password) {
            setUser({ name: nombre, role: "user" });
        } else {
            setError(true);
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <img src={profileIcon} alt="Profile Icon" className="profile-icon" />
                <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="input-container">
                        <input
                            type="text"
                            value={nombre}
                            placeholder="Usuario"
                            onChange={(e) => setNombre(e.target.value)}
                        />
                    </div>
                    <div className="input-container">
                        <input
                            type="password"
                            value={contraseña}
                            placeholder="Contraseña"
                            onChange={(e) => setContraseña(e.target.value)}
                        />
                    </div>
                    <button type="submit">Iniciar Sesion</button>
                </form>
                {error && <p className="error-message">Incorrect credentials or fields are empty.</p>}
            </div>
        </div>
    );
}

Formulario.propTypes = {
    setUser: PropTypes.func.isRequired,
};

