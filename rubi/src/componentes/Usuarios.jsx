// src/pages/Usuarios.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Section.css'; // Puedes tener estilos comunes para todas las secciones aquí

function Usuarios() {
    return (
        <div className="section-container">
            <h1>Gestión de Usuarios</h1>
            <button className="add-button">Agregar Usuario</button>
            <table className="data-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Correo</th>
                        <th>Rol</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Aquí podrías mapear datos de usuarios */}
                    <tr>
                        <td>1</td>
                        <td>Juan Pérez</td>
                        <td>juan@example.com</td>
                        <td>Admin</td>
                        <td>
                            <button className="action-button">Editar</button>
                            <button className="action-button delete">Eliminar</button>
                        </td>
                    </tr>
                    {/* Repetir o renderizar filas dinámicamente */}
                </tbody>
            </table>
        </div>
    );
}

export default Usuarios;
