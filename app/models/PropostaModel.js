'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.Promise = global.Promise;

var propostaSchema = new Schema({
    usuario_id: { type: Schema.Types.ObjectId },
    descricao: { type: String },
    pedido_id: { type: Schema.Types.ObjectId },
    titulo: { type: String },
    aberto: { type: Boolean, default: false },
    aceita: { type: Boolean, default: false },
    avaliado: { type: Boolean, default: false },
    Created_date: {
        type: Date,
        default: Date.now
    }
});

propostaSchema.index({usuario_id:1, pedido_id:1}, {unique:true});

module.exports = mongoose.model("Propostas", propostaSchema);