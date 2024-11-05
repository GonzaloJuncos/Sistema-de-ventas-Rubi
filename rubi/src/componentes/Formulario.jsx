// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import "./Formulario.css";
import profileIcon from "../assets/profile-icon.png";

export function Formulario({ setUser }) {
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3001/api/login', {
                documento: nombre,
                clave: contraseña,
            });

            const { id, nombre: userName, rol } = response.data;
            setUser({ id, name: userName, role: rol });
            setError(false);
        // eslint-disable-next-line no-unused-vars
        } catch (err) {
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
                            placeholder="Documento"
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
                {error && <p className="error-message">Usuario o Contraseña Incorrectos.</p>}
            </div>
        </div>
    );
}

Formulario.propTypes = {
    setUser: PropTypes.func.isRequired,
};
