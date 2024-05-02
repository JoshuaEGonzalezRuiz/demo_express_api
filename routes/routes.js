const express = require('express');
const router = express.Router();

// Importar rutas específicas
const carritoRoute = require('./carritoRoute');
const productosRoute = require('./productosRoute');
const usuariosRoute = require('./usuariosRoute');

// Rutas específicas para carrito
router.use('/carrito', carritoRoute);

// Rutas específicas para productos
router.use('/productos', productosRoute);

// Rutas específicas para usuarios
router.use('/usuarios', usuariosRoute);

module.exports = router;
