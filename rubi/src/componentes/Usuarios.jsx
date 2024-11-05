
// src/pages/Usuarios.jsx
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Section.css';

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        documento: '',
        nombreCompleto: '',
        correo: '',
        telefono: '',
        clave: '',
        idRol: ''
    });
    const [error, setError] = useState(null);

    // Cargar usuarios al montar el componente
    useEffect(() => {
        const fetchUsuarios = async () => {
            try {
                const response = await axios.get('http://localhost:3001/api/usuarios');
                setUsuarios(response.data);
            } catch (err) {
                console.error('Error al cargar usuarios:', err);
            }
        };
        fetchUsuarios();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:3001/api/usuarios', formData);
            setShowForm(false); // Oculta el formulario después de registrar al usuario
            setFormData({ documento: '', nombreCompleto: '', correo: '', telefono: '', clave: '', idRol: '' });
            setError(null);
            // Recargar usuarios después del registro
            const response = await axios.get('http://localhost:3001/api/usuarios');
            setUsuarios(response.data);
        // eslint-disable-next-line no-unused-vars
        } catch (err) {
            setError('Error al registrar usuario');
        }
    };

    return (
        <div className="section-container">
            <h1>Gestión de Usuarios</h1>
            <button className="add-button" onClick={() => setShowForm(!showForm)}>Agregar Usuario</button>

            {showForm && (
                <div className="form-container">
                    <h2>Registrar Usuario</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="documento" placeholder="Documento" value={formData.documento} onChange={handleChange} required />
                        <input type="text" name="nombreCompleto" placeholder="Nombre Completo" value={formData.nombreCompleto} onChange={handleChange} required />
                        <input type="email" name="correo" placeholder="Correo" value={formData.correo} onChange={handleChange} />
                        <input type="text" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} />
                        <input type="password" name="clave" placeholder="Contraseña" value={formData.clave} onChange={handleChange} required />
                        <select name="idRol" value={formData.idRol} onChange={handleChange} required>
                            <option value="">Seleccione un rol</option>
                            <option value="1">Admin</option>
                            <option value="2">Empleado</option>
                        </select>
                        <button type="submit">Registrar</button>
                    </form>
                    {error && <p className="error-message">{error}</p>}
                </div>
            )}

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
                    {usuarios.map((usuario) => (
                        <tr key={usuario.idUsuario}>
                            <td>{usuario.idUsuario}</td>
                            <td>{usuario.NombreCompleto}</td>
                            <td>{usuario.Correo}</td>
                            <td>{usuario.Rol}</td>
                            <td>
                                <button className="action-button">Editar</button>
                                <button className="action-button delete">Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Usuarios;
