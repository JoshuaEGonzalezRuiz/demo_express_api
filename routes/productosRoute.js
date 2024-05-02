const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');

// Rutas para los productos
router.get('/', productosController.obtenerTodos);
router.get('/:id', productosController.obtenerPorId);
router.put('/actualizar-cantidad', productosController.actualizarCantidad);

module.exports = router;
