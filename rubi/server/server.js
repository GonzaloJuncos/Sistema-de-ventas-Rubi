// server.js
import express from 'express';
import mysql from 'mysql2';
import cors from 'cors';

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: 'localhost',
  port: '3306',
  user: 'root',
  password: 'matute',
  database: 'SistemaVentas'
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    return;
  }
  console.log('Conectado a MySQL');
});

// Ruta de login
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

// Rutas para obtener y registrar usuarios
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

// Carga de Usuarios 
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

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
