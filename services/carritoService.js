const carritoModel = require('../models/carritoModel');

async function agregarProducto(usuarioId, productoId, cantidad) {
    await carritoModel.agregarProducto(usuarioId, productoId, cantidad);
}

async function obtenerProductos(usuarioId) {
    return await carritoModel.obtenerProductos(usuarioId);
}

async function actualizarCantidad(nuevaCantidad, usuarioId, productoId) {
    await carritoModel.actualizarCantidad(nuevaCantidad, usuarioId, productoId);
}

async function quitarProducto(usuarioId, productoId) {
    await carritoModel.quitarProducto(usuarioId, productoId);
}

module.exports = {
    agregarProducto,
    obtenerProductos,
    actualizarCantidad,
    quitarProducto
};
