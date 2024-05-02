const productosModel = require('../models/productoModel');

async function obtenerTodos() {
    return await productosModel.obtenerTodos();
}

async function obtenerPorId(id) {
    return await productosModel.obtenerPorId(id);
}

async function actualizarCantidad(nuevaCantidad, productoId) {
    return await productosModel.actualizarCantidad(nuevaCantidad, productoId);
}

module.exports = {
    obtenerTodos,
    obtenerPorId,
    actualizarCantidad
};