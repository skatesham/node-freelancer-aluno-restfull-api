'use strict';

var mongoose = require('mongoose'),
    jwt = require('jsonwebtoken');

var Usuario = mongoose.model('Usuarios');

const config = require('../../');

exports.login = function (req, res) {
    var user = req.body;
    if (!user.email || !user.senha) {
        res.status(400).send("Você precisa enviar um email e senha");
    };
    Usuario.findOne({ email: user.email }, (err, usuario) => {
        if (!usuario || user.senha != usuario.senha) {
            res.status(401).send("email e senha não conferem com nenhum documento do sistema");
        }
        usuario.senha = usuario.imagem = null;
        const payload = {
            nick: usuario.nick,
            email: usuario.email
        }
        const expiresIn = Date.now() + (100 * 60 * 60);
        var token = jwt.sign(payload, config.secret, { expiresIn: '1h' });
        res.status(201).json(
            {
                "mensagem": "Login realizado com sucesso",
                "success": true,
                "token": token,
                "expiresIn": expiresIn,
                usuario
            });
    });
};

exports.is_logged_in = (req, res) => {
    res.status(200).json({ "message": "login success!" });
};

exports.error_handler = function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
        res.status(401).send(err);
    }
    if (err.name = "ReferenceError") {
        res.status(400).send(err);
    }
    else {
        next(err);
    }
}