// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Home.css';

export function Home({ user, setUser }) {
    const navigate = useNavigate();

    // Función para manejar el logout
    const handleLogout = () => {
        setUser(null); // Limpia el estado del usuario
        navigate('/'); // Redirige a la página de inicio de sesión
    };

    return (
        <div className="container">
            {/* Barra lateral de navegación siempre visible */}
            <div className="sidebar">
                <h2>Panel de Navegación</h2>
                <Link to="/usuarios">
                    <button className="menu-button">Usuarios</button>
                </Link>
                <Link to="/proveedores">
                    <button className="menu-button">Proveedores</button>
                </Link>
                <Link to="/sucursales">
                    <button className="menu-button">Sucursales</button>
                </Link>
                <Link to="/productos">
                    <button className="menu-button">Productos</button>
                </Link>
                <Link to="/ventas">
                    <button className="menu-button">Ventas</button>
                </Link>
                {user.role === 'admin' && (
                    <>
                        <Link to="/stock">
                            <button className="menu-button">Stock</button>
                        </Link>
                        <Link to="/reportes">
                            <button className="menu-button">Reportes</button>
                        </Link>
                    </>
                )}
                {/* Información del usuario al final */}
                <div className="user-info">
                    <span>Bienvenido, {user.name}</span>
                    <button className="logout-button" onClick={handleLogout}>Cerrar Sesión</button>
                </div>
            </div>

            <div className="main-content">
                {/* Aquí va el contenido principal */}
            </div>
        </div>
    );
}


