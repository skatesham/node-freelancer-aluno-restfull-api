'use strict';

var mongoose = require('mongoose');

var Propostas = require('../models/PropostaModel');

exports.list_all_propostas = function (req, res) {
    Propostas.find({}, function (err, propostas) {
        if (err) {
            res.send(err);
        }
        res.json(propostas);
    });
}

exports.create_a_proposta = function (req, res) {
    var new_proposta = new Propostas(req.body);
    new_proposta.save(function (err, propostas) {
        if (err) {
            res.send(err);
        }
        res.json(propostas);
    });
}

exports.read_a_pedido = function (req, res) {
    Propostas.findOne({ _id: req.params.propostaId }, function (err, propostas) {
        if (err) {
            res.send(err);
        }
        res.json(propostas);
    });
}

exports.update_a_pedido = function (req, res) {
    Propostas.findOneAndUpdate({ _id: req.params.propostaId }, req.body, { new: true }, function (err, propostas) {
        if (err) {
            res.send(err);
        }
        res.json(propostas);
    });
}

exports.delete_a_pedido = function (req, res) {
    Propostas.remove({ _id: req.params.propostaId }, function (err, propostas) {
        if (err) {
            res.send(err);
        }
        res.json({ message: "Proposta excluida com sucesso", propostas });
    });
}

exports.propostas_by_usuario_id = function (req, res) {
    Propostas.find({usuario_id: req.params.usuarioId}, function (err, propostas) {
        if (err) {
            res.send(err);
        }
        res.json(propostas);
    });
}



exports.propostas_by_pedido_id = function (req, res) {
    Propostas.find({pedido_id: req.params.pedidoId}, function (err, propostas) {
        if (err) {
            res.send(err);
        }
        res.json(propostas);
    });
}

