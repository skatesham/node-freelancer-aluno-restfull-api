'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var pedidoSchema = new Schema({
    usuario_id: { type: Schema.Types.ObjectId },
    titulo: { type: String },
    disciplina: { type: String },
    descricao: { type: String },
    proposta: { type: String },
    tags: { type: [Schema.Types.ObjectId] },
    aberto: { type: Boolean, default: false },
    avaliado: { type: Boolean, default: false },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

pedidoSchema.index({usuario_id: 1});

module.exports = mongoose.model('Pedidos', pedidoSchema);