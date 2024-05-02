const carritoService = require('../services/carritoService');

async function agregarProducto(req, res) {
    const { usuarioId, productoId, cantidad } = req.body;
    try {
        await carritoService.agregarProducto(usuarioId, productoId, cantidad);
        res.status(200).json({ message: 'Producto agregado al carrito correctamente' });
    } catch (error) {
        console.error('Error al agregar el producto al carrito:', error.message);
        res.status(500).json({ message: 'Error al agregar el producto al carrito' });
    }
}

async function obtenerProductos(req, res) {
    const { usuarioId } = req.params;
    try {
        const productos = await carritoService.obtenerProductos(usuarioId);
        res.status(200).json(productos);
    } catch (error) {
        console.error('Error al obtener los productos del carrito:', error.message);
        res.status(500).json({ message: 'Error al obtener los productos del carrito' });
    }
}

async function actualizarCantidad(req, res) {
    const { cantidad, usuarioId, productoId } = req.body;
    try {
        await carritoService.actualizarCantidad(cantidad, usuarioId, productoId);
        res.status(200).json({ message: 'Cantidad de producto en el carrito actualizada' });
    } catch (error) {
        console.error('Error al actualizar la cantidad en el carrito:', error.message);
        res.status(500).json({ message: 'Error al actualizar la cantidad en el carrito' });
    }
}

async function quitarProducto(req, res) {
    const { usuarioId, productoId } = req.params;
    try {
        await carritoService.quitarProducto(usuarioId, productoId);
        res.status(200).json({ message: 'Producto eliminado del carrito correctamente' });
    } catch (error) {
        console.error('Error al eliminar el producto del carrito:', error.message);
        res.status(500).json({ message: 'Error al eliminar el producto del carrito' });
    }
}

module.exports = {
    agregarProducto,
    obtenerProductos,
    actualizarCantidad,
    quitarProducto
};
