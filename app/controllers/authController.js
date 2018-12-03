'use strict';

var mongoose = require('mongoose'),
    jwt = require('jsonwebtoken'),
    SHA256 = require('crypto-js/sha256'),
    dotenv = require('dotenv');

var Usuario = mongoose.model('Usuarios');

// LOAD ENV CONFIGS
dotenv.config();

exports.login = function (req, res) {
    var user = req.body;
    if (!user.email || !user.senha) {
        res.status(400).send("Você precisa enviar um email e senha");
    } else {
        Usuario.findOne({ email: user.email }, (err, usuario) => {
            if (err) {
                res.send(err);
            }
            // creating hash for password
            if (!usuario || SHA256(user.senha) != usuario.senha) {
                res.status(401).send("email e senha não conferem com nenhum documento do sistema");
            } else {
                usuario.senha = null;
                const payload = {
                    nick: usuario.nick,
                    email: usuario.email
                }
                const expiresIn = Date.now() + (100 * 60 * 60);
                var token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });
                res.status(201).json(
                    {
                        "mensagem": "Login realizado com sucesso",
                        "success": true,
                        "token": token,
                        "expiresIn": expiresIn,
                        usuario
                    });
            };
        });
    }
};

/**
 * Função não está funcionando
 */
exports.isLoggedIn = function (req, res, next) {
    // check header or url parameters or post parameters for token
    var token = req.headers.authorization;
    // decode token
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
            if (err) {
                return res.status(401).send({
                    success: false,
                    message: 'Sign in to continue. Token Error'
                });
            } else {
                // if everything is good, save to request for use in other routes
                next();
            }
        });
    } else {
        // if there is no token
        // return an error
        return res.status(401).send({
            success: false,
            message: 'Sign in to continue.'
        });
    }
}

exports.is_logged_in = (req, res) => {
    res.json({ "message": "login success!" });
};

exports.error_handler = function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') { // Send the error rather than to show it on the console
        res.status(401).send(err);
    }
    else if (err.name = "ReferenceError") {
        res.status(400).send(err);
    }
    else {
        next(err);
    }
}

exports.home = function (req, res) {
    res.send("Para login acessar '/login' com \n " +
        " \ { email: 'email', senha:'senha'} \n" +
        "Cadastro realizar .post em '/usuarios com \n'" +
        " \ {nick, email, senha, tel}");
};