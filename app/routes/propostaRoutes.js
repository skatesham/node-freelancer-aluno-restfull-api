'use strict';

module.exports = function (app) {

    var proposta = require('../controllers/propostaController');

    app.route("/propostas")
        .get(proposta.list_all_propostas)
        .post(proposta.create_a_proposta);

    app.route("/propostas/:propostaId")
        .get(proposta.read_a_pedido)
        .put(proposta.update_a_pedido)
        .delete(proposta.delete_a_pedido);

    app.route("/propostasByUsuario/:usuarioId")
        .get(proposta.propostas_by_usuario_id)

    app.route("/propostasByPedido/:pedidoId")
        .get(proposta.propostas_by_pedido_id);
}