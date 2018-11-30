'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuarioSchema = new Schema({
    nick: { type: String},
    email: { type: String},
    senha: { type: String},
    tel: { type: String},
    imagem: { type: String},
    github: { type: String},
    linkedin: { type: String},
    facebook: { type: String},
    instagram: { type: String},
    Created_date: {
        type: Date,
        default: Date.now
}
});