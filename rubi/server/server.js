// server.js
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// Configuración de la conexión MySQL
const db = mysql.createConnection({
  host: 'localhost',
  port: '3306',      
  user: 'root',      
  password: 'matute', 
  database: 'sistema_de_venta' 
});

db.connect((err) => {
  if (err) {
    console.error('Error al conectar a MySQL:', err);
    return;
  }
  console.log('Conectado a MySQL');
});

app.get('/api/usuarios', (req, res) => {
  db.query('SELECT * FROM usuarios', (err, results) => {
    if (err) {
      res.status(500).send('Error en la consulta');
      return;
    }
    res.json(results);
  });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
