'use strict';

var mongoose = require('mongoose'),

Usuario = mongoose.model('Usuarios');
//get
exports.list_all_usuarios = function (req, res) {
    Usuario.find({}, function (err, usr) {
        if (err) {
            res.send(err);
        }
        res.json(usr);
    });
}

//post
exports.create_a_usuario = function (req, res) {
    var new_usr = new Usuario(req.body);
    new_usr.save(function (err, usr) {
        if (err) {
            res.send(err);
        }
        res.json(usr);
    });
}

//get /:usrId
exports.read_a_usuario = function (req, res) {
    Usuario.findById(req.params.usrId, function (err, usr) {
        if (err) {
            res.send(err);
        }
        res.json(usr);
    });
}

//put /:usrId
exports.update_a_usuario = function (req, res) {
    Usuario.findOneAndUpdate({ _id: req.params.usrId }, req.body, {new : true}, function (err, usr) {
        if (err) {
            res.send(err);
        }
        res.json(usr);
    });
}

//delete /:usrId
exports.delete_a_usuario = function (req, res) {
    Usuario.remove({ _id: req.params.usrId }, function (err, usr) {
        if (err) {
            res.send(err);
        }
        res.json({ message:"Usuario excluido com sucesso", usr });
    });
}

//get by email /:email
exports.read_by_email_usuario = function (req, res) {
    Usuario.findOne({ email: req.params.email }, function (err, usr) {
        if (err) {
            res.send(err);
        }
        res.json(usr);
    });
}