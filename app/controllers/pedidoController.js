'use strict';

var mongoose = require('mongoose')

Pedido = mongoose.model("Pedidos");

exports.list_all_pedidos = function(req, res){
    Pedido.find({}, function(err, pedidos){
        if(err){
            res.send(err);
        }
        res.json(pedidos);
    });
};
