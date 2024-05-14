const express = require('express');
const router = express.Router();
const { verificarToken } = require('../middlewares/autenticador');
const carritoController = require('../controllers/carritoController');

// Rutas relacionadas con el carrito de compras
router.post('/agregar', verificarToken, carritoController.agregarProducto);
router.get('/:usuarioId', verificarToken, carritoController.obtenerProductos);
router.put('/actualizar-cantidad', verificarToken, carritoController.actualizarCantidad);
router.delete('/:usuarioId/:productoId', verificarToken, carritoController.quitarProducto);

module.exports = router;
