const express = require('express');
const router = express.Router();
const usuariosController = require('../controllers/usuariosController');

// Rutas para usuarios
router.post('/registrar', usuariosController.registrarUsuario);
router.get('/:nombre', usuariosController.obtenerUsuarioPorNombre);
router.get('/id/:id', usuariosController.obtenerUsuarioPorId);

module.exports = router;
