'use strict';

module.exports = function (app) {

    var pedidos = require('../controllers/pedidoController');

    var jwtMW = require('../libs/auth');

    app.route('/pedidos')
        .get(jwtMW, pedidos.list_all_pedidos)
        .post(jwtMW, pedidos.create_a_pedido);

    app.route('/pedidos/:pedidoId')
        .get(jwtMW, pedidos.read_a_pedido)
        .put(jwtMW, pedidos.update_a_pedido)
        .delete(jwtMW, pedidos.delete_a_pedido);

    app.route('/pedidosByUsuario/:usuarioId')
        .get(jwtMW, pedidos.list_by_usuario);

}