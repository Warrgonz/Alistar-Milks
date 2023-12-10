'use strict';

// app.js

const express = require('express');
const app = express();

// Hacer la carpeta static publica.
app.use(express.static('public'));

// Importar el archivo central de rutas
const misRutas = require('./routes/routes');

// Usar el archivo central de rutas
app.use('/', misRutas);

// Levantar el servidor en un puerto específico
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
