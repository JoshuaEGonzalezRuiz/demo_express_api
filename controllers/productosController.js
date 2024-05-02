const productosService = require('../services/productosService');

async function obtenerTodos(req, res) {
    try {
        const productos = await productosService.obtenerTodos();
        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los productos' });
    }
}

async function obtenerPorId(req, res) {
    const { id } = req.params;
    try {
        const producto = await productosService.obtenerPorId(id);
        if (producto) {
            res.json(producto);
        } else {
            res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el producto' });
    }
}

async function actualizarCantidad(req, res) {
    const { nuevaCantidad, productoId } = req.body;
    try {
        await productosService.actualizarCantidad(nuevaCantidad, productoId);
        res.json({ message: 'Cantidad de producto actualizada' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la cantidad de producto' });
    }
}

module.exports = {
    obtenerTodos,
    obtenerPorId,
    actualizarCantidad
};
