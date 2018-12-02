'use strict';

module.exports = function (app) {

var pedidos = require('../controllers/pedidoController');

    app.route('/pedidos')
        .get(pedidos.list_all_pedidos)
        .post(pedidos.create_a_pedido);

    app.route('/pedidos/:pedidoId')
        .get(pedidos.read_a_pedido)
        .put(pedidos.update_a_pedido)
        .delete(pedidos.delete_a_pedido);

    app.route('/pedidosByUsuario/:usuarioId')
        .get(pedidos.list_by_usuario);

}