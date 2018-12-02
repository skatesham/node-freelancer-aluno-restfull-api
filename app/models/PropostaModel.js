'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

propostaSchema = new Schema({
    id: number,
    usuario_id: { type: String },
    descricao: { type: String },
    pedido_id: { type: String },
    titulo: { type: String },
    aberto: { type: boolean, default: false },
    aceita: { type: boolean, default: false },
    avaliado: { type: boolean, default: false },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model("Propostas", propostaSchema);