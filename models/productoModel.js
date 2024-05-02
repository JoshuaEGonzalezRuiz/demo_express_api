const { obtenerConexion } = require('../database/conexion');

async function obtenerTodos() {
    const conexion = await obtenerConexion();
    try {
        const [results] = await conexion.query('SELECT * FROM productos');
        return results;
    } catch (error) {
        console.error('Error al obtener los productos:', error.message);
        throw error;
    } finally {
        conexion.release();
    }
}

async function obtenerPorId(id) {
    const conexion = await obtenerConexion();
    try {
        const [results] = await conexion.query('SELECT * FROM productos WHERE id = ?', [id]);
        if (results.length > 0) {
            return results[0];
        }
        return null;
    } catch (error) {
        console.error('Error al obtener el producto por ID:', error.message);
        throw error;
    } finally {
        conexion.release();
    }
}

async function actualizarCantidad(nuevaCantidad, productoId) {
    const conexion = await obtenerConexion();
    try {
        await conexion.query('UPDATE productos SET cantidad = ? WHERE id = ?', [nuevaCantidad, productoId]);
        console.log('Cantidad de producto actualizada');
    } catch (error) {
        console.error('Error al actualizar la cantidad de producto:', error.message);
        throw error;
    } finally {
        conexion.release();
    }
}

module.exports = {
    obtenerTodos,
    obtenerPorId,
    actualizarCantidad
};