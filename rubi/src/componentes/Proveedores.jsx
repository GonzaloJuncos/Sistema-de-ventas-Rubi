// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Section.css';

function Proveedores() {
    const [proveedores, setProveedores] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        direccion: '',
        telefono: '',
        email: '',
        tipoProveedor: '',
        estado: '1', // Estado inicial: Activo (1)
        fechaRegistro: '' // Campo para la fecha de registro
    });
    const [error, setError] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [editingProveedorId, setEditingProveedorId] = useState(null);

    useEffect(() => {
        const fetchProveedores = async () => {
            try {
                // Ajusta la URL para conectarte al backend
                const response = await axios.get('http://localhost:3001/api/proveedores');
                setProveedores(response.data);
            } catch (err) {
                console.error('Error al cargar proveedores:', err);
            }
        };
        fetchProveedores();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (isEditing) {
                await axios.put(`http://localhost:3001/api/proveedores/${editingProveedorId}`, formData);
                setIsEditing(false);
                setEditingProveedorId(null);
            } else {
                // Si no se está editando, agrega la fecha de registro actual automáticamente
                const newFormData = { ...formData, fechaRegistro: new Date().toISOString().split('T')[0] }; // Formato: YYYY-MM-DD
                await axios.post('http://localhost:3001/api/proveedores', newFormData);
            }

            // Reinicia el formulario y oculta el formulario de registro
            setShowForm(false);
            setFormData({ nombre: '', direccion: '', telefono: '', email: '', tipoProveedor: '', estado: '1', fechaRegistro: '' });
            setError(null);

            // Recarga la lista de proveedores
            const response = await axios.get('http://localhost:3001/api/proveedores');
            setProveedores(response.data);
        // eslint-disable-next-line no-unused-vars
        } catch (err) {
            setError('Error al registrar o actualizar proveedor');
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/api/proveedores/${id}`);
            setProveedores(proveedores.filter((proveedor) => proveedor.idProveedor !== id));
        } catch (err) {
            console.error('Error al eliminar proveedor:', err);
        }
    };

    const handleEdit = (proveedor) => {
        setFormData({
            nombre: proveedor.Nombre,
            direccion: proveedor.Direccion,
            telefono: proveedor.Telefono,
            email: proveedor.Email,
            tipoProveedor: proveedor.TipoProveedor,
            estado: proveedor.Estado ? '1' : '0', // Convertir a string para el select
            fechaRegistro: proveedor.FechaRegistro // Muestra la fecha existente
        });
        setShowForm(true);
        setIsEditing(true);
        setEditingProveedorId(proveedor.idProveedor);
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredProveedores = proveedores.filter((proveedor) =>
        proveedor.Nombre.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="section-container-Usuario">
            <h1>Gestión de Proveedores</h1>
            <button className="add-button" onClick={() => setShowForm(!showForm)}>Agregar Proveedor</button>

            {showForm && (
                <div className="form-container">
                    <h2>{isEditing ? 'Editar Proveedor' : 'Registrar Proveedor'}</h2>
                    <form onSubmit={handleSubmit}>
                        <input type="text" name="nombre" placeholder="Nombre" value={formData.nombre} onChange={handleChange} required />
                        <input type="text" name="direccion" placeholder="Dirección" value={formData.direccion} onChange={handleChange} required />
                        <input type="text" name="telefono" placeholder="Teléfono" value={formData.telefono} onChange={handleChange} />
                        <input type="email" name="email" placeholder="Correo" value={formData.email} onChange={handleChange} />
                        <input type="text" name="tipoProveedor" placeholder="Tipo de Proveedor" value={formData.tipoProveedor} onChange={handleChange} />
                        <select name="estado" value={formData.estado} onChange={handleChange}>
                            <option value="1">Activo</option>
                            <option value="0">Inactivo</option>
                        </select>
                        <input
                            type="date"
                            name="fechaRegistro"
                            placeholder="Fecha de Registro"
                            value={formData.fechaRegistro}
                            onChange={handleChange}
                            required
                            disabled={isEditing} // Solo permite edición en modo de registro
                        />
                        <button type="submit">{isEditing ? 'Actualizar' : 'Registrar'}</button>
                    </form>
                    {error && <p className="error-message">{error}</p>}
                </div>
            )}

            <input
                type="text"
                placeholder="Buscar por nombre..."
                value={searchTerm}
                onChange={handleSearchChange}
                className="search-input"
            />

            <table className="data-table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Dirección</th>
                        <th>Teléfono</th>
                        <th>Correo</th>
                        <th>Tipo de Proveedor</th>
                        <th>Estado</th>
                        <th>Fecha de Registro</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredProveedores.map((proveedor) => (
                        <tr key={proveedor.idProveedor}>
                            <td>{proveedor.Nombre}</td>
                            <td>{proveedor.Direccion}</td>
                            <td>{proveedor.Telefono}</td>
                            <td>{proveedor.Email}</td>
                            <td>{proveedor.TipoProveedor}</td>
                            <td>{proveedor.Estado ? 'Activo' : 'Inactivo'}</td>
                            <td>{new Date(proveedor.FechaRegistro).toLocaleDateString()}</td>
                            <td>
                                <button className="action-button" onClick={() => handleEdit(proveedor)}>Editar</button>
                                <button className="action-button delete" onClick={() => handleDelete(proveedor.idProveedor)}>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Proveedores;


