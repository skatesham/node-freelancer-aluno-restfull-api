'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

pedidoSchema = new Schema({
    usuario_id: { type: String },
    titulo: { type: String },
    disciplina: { type: String },
    descricao: { type: String },
    proposta: { type: String },
    tags: { type: [String] },
    aberto: { type: boolean, default: false },
    avaliado: { type: boolean, default: false }
});

pedidoSchema.index({usuario_id: 1});

module.exports = mongoose.model('Pedidos', pedidoSchema);