
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

