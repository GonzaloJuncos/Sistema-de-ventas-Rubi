// server.js
import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const PORT = 3001;

// Middleware para permitir solicitudes de otros dominios y recibir datos JSON
app.use(cors());
app.use(express.json());

// Configuración de la conexión con la base de datos MySQL
const db = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'matute',
  database: 'SistemaVentas'
});

// Conecta a MySQL y verifica si hay errores
db.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    return;
  }
  console.log('Conectado a MySQL');
});

// Ruta de inicio de sesión
app.post('/api/login', (req, res) => {
  const { documento, clave } = req.body;

  const query = `
    SELECT u.*, r.Descripcion as Rol
    FROM USUARIO u
    JOIN ROL r ON u.idRol = r.idRol
    WHERE u.Documento = ? AND u.Clave = ?
  `;

  db.query(query, [documento, clave], (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error en el servidor' });
    }

    if (results.length === 0) {
      return res.status(401).json({ message: 'Usuario o contraseña incorrectos' });
    }

    const user = results[0];
    res.json({ id: user.idUsuario, nombre: user.NombreCompleto, rol: user.Rol });
  });
});

// Ruta para obtener la lista de usuarios
app.get('/api/usuarios', (req, res) => {
  const query = `
    SELECT u.idUsuario, u.NombreCompleto, u.Correo, r.Descripcion as Rol
    FROM USUARIO u
    JOIN ROL r ON u.idRol = r.idRol
  `;
  
  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ message: 'Error al obtener usuarios' });
    }
    res.json(results);
  });
});

// Ruta para registrar un nuevo usuario
app.post('/api/usuarios', (req, res) => {
  const { documento, nombreCompleto, correo, telefono, clave, idRol } = req.body;

  const query = `
    INSERT INTO USUARIO (Documento, NombreCompleto, Correo, Telefono, Clave, idRol)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  db.query(query, [documento, nombreCompleto, correo, telefono, clave, idRol], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error al registrar usuario' });
    }
    res.status(201).json({ message: 'Usuario registrado exitosamente' });
  });
});

// Ruta para eliminar un usuario por ID
app.delete('/api/usuarios/:id', (req, res) => {
  const { id } = req.params;

  const query = `DELETE FROM USUARIO WHERE idUsuario = ?`;

  db.query(query, [id], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error al eliminar usuario' });
    }
    res.status(200).json({ message: 'Usuario eliminado exitosamente' });
  });
});

// Ruta para actualizar un usuario por ID
app.put('/api/usuarios/:id', (req, res) => {
  const { id } = req.params;
  const { documento, nombreCompleto, correo, telefono, clave, idRol } = req.body;

  const query = `
    UPDATE USUARIO
    SET Documento = ?, NombreCompleto = ?, Correo = ?, Telefono = ?, Clave = ?, idRol = ?
    WHERE idUsuario = ?
  `;

  db.query(query, [documento, nombreCompleto, correo, telefono, clave, idRol, id], (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ message: 'Error al actualizar usuario' });
    }
    res.status(200).json({ message: 'Usuario actualizado exitosamente' });
  });
});

// Ruta para obtener la lista de proveedores
app.get('/api/proveedores', (req, res) => {
  const query = `SELECT * FROM PROVEEDOR`;
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error al obtener proveedores:', err);
      return res.status(500).json({ message: 'Error al obtener proveedores' });
    }
    res.json(results);
  });
});

// Ruta para crear un nuevo proveedor
app.post('/api/proveedores', (req, res) => {
  const { nombre, direccion, telefono, email, tipoProveedor, estado } = req.body;

  const query = `
    INSERT INTO PROVEEDOR (Nombre, Direccion, Telefono, Email, TipoProveedor, Estado, FechaRegistro) 
    VALUES (?, ?, ?, ?, ?, ?, NOW())
  `;

  db.query(query, [nombre, direccion, telefono, email, tipoProveedor, estado ? 1 : 0], (err) => {
    if (err) {
      console.error('Error al crear proveedor:', err);
      return res.status(500).json({ message: 'Error al crear proveedor', error: err });
    }
    res.status(201).json({ message: 'Proveedor creado exitosamente' });
  });
});
// Inicia el servidor en el puerto especificado
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
