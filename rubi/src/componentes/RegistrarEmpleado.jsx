/*
// src/componentes/AgregarUsuario.jsx
import React, { useState } from 'react';

export function AgregarUsuario() {
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí podrías agregar la lógica para agregar un nuevo usuario
        console.log("Usuario agregado:", { nombre, contraseña });
    };

    return (
        <section>
            <h1>Agregar Usuario</h1>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Nombre" 
                    value={nombre} 
                    onChange={(e) => setNombre(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Contraseña" 
                    value={contraseña} 
                    onChange={(e) => setContraseña(e.target.value)} 
                />
                <button type="submit">Agregar Usuario</button>
            </form>
        </section>
    );
}
*/
// src/componentes/AgregarUsuario.jsx
import React, { useState, useEffect } from 'react';

export function RegistrarEmpleado() {
    const [Id_Empleado, setId_Empleado] = useState("");
    const [nombre, setNombre] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [mensaje, setMensaje] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Usuario agregado:", { nombre, contraseña });
        setMensaje(`Usuario ${nombre} agregado exitosamente!`);
        setNombre("");
        setContraseña("");
    };

    useEffect(() => {
        if (mensaje) {
            const timer = setTimeout(() => {
                setMensaje(""); 
            }, 3000);
            return () => clearTimeout(timer); 
        }
    }, [mensaje]);

    return (
        <section>
            <h1>Agregar Usuario</h1>
            <form onSubmit={handleSubmit}>
                <input
                type='number'
                placeholder='Id_Empleado'
                value={Id_Empleado}
                onChange={(e) => setId_Empleado(e.target.value)}
                />
                <input 
                    type="text" 
                    placeholder="Nombre" 
                    value={nombre} 
                    onChange={(e) => setNombre(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Contraseña" 
                    value={contraseña} 
                    onChange={(e) => setContraseña(e.target.value)} 
                />
                <button type="submit">Agregar Usuario</button>
            </form>
            {mensaje && <p>{mensaje}</p>} 
        </section>
    );
}
