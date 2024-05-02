const usuariosService = require('../services/usuariosService');

async function registrarUsuario(req, res) {
    const { nombre, email, password } = req.body;
    try {
        await usuariosService.registrar(nombre, email, password);
        res.status(201).send('Usuario registrado correctamente');
    } catch (error) {
        console.error('Error al registrar usuario:', error);
        res.status(500).send('Error interno del servidor');
    }
}

async function obtenerUsuarioPorNombre(req, res) {
    const { nombre } = req.params;
    try {
        const usuario = await usuariosService.obtenerPorNombre(nombre);
        if (!usuario) {
            res.status(404).send('Usuario no encontrado');
        } else {
            res.status(200).json(usuario);
        }
    } catch (error) {
        console.error('Error al obtener usuario por nombre:', error);
        res.status(500).send('Error interno del servidor');
    }
}

async function obtenerUsuarioPorId(req, res) {
    const { id } = req.params;
    try {
        const usuario = await usuariosService.obtenerPorId(id);
        if (!usuario) {
            res.status(404).send('Usuario no encontrado');
        } else {
            res.status(200).json(usuario);
        }
    } catch (error) {
        console.error('Error al obtener usuario por ID:', error);
        res.status(500).send('Error interno del servidor');
    }
}

module.exports = {
    registrarUsuario,
    obtenerUsuarioPorNombre,
    obtenerUsuarioPorId
};
