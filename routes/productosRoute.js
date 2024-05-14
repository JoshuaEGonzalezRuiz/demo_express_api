const express = require('express');
const router = express.Router();
const { verificarToken } = require('../middlewares/autenticador');
const productosController = require('../controllers/productosController');

// Rutas para los productos
router.get('/', productosController.obtenerTodos);
router.get('/:id', productosController.obtenerPorId);
router.put('/actualizar-cantidad', verificarToken, productosController.actualizarCantidad);

module.exports = router;
