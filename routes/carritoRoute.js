const express = require('express');
const router = express.Router();
const carritoController = require('../controllers/carritoController');

// Rutas relacionadas con el carrito de compras
router.post('/agregar', carritoController.agregarProducto);
router.get('/:usuarioId', carritoController.obtenerProductos);
router.put('/actualizar-cantidad', carritoController.actualizarCantidad);
router.delete('/:usuarioId/:productoId', carritoController.quitarProducto);

module.exports = router;
