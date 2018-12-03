'use strict';

module.exports = function (app) {

    var proposta = require('../controllers/propostaController');

    var jwtMW = require('../libs/auth');

    app.route("/propostas")
        .get(jwtMW, proposta.list_all_propostas)
        .post(jwtMW, proposta.create_a_proposta);

    app.route("/propostas/:propostaId")
        .get(jwtMW, proposta.read_a_pedido)
        .put(jwtMW, proposta.update_a_pedido)
        .delete(jwtMW, proposta.delete_a_pedido);

    app.route("/propostasByUsuario/:usuarioId")
        .get(jwtMW, proposta.propostas_by_usuario_id)

    app.route("/propostasByPedido/:pedidoId")
        .get(jwtMW, proposta.propostas_by_pedido_id);
}