'use strict';

const express = require('express');
const router = express.Router();

// Importar las rutas individuales
const rutas = require('./index'); // Aquí puedes importar otras rutas también

// Usar las rutas individuales
router.use('/', rutas);
// Puedes usar otras rutas según tus necesidades

module.exports = router;

