'use strict';

var mongoose = require('mongoose'),

    Tags = mongoose.model('Tags');

exports.get_or_create = function (req, res) {
    Tags.findOneOrCreate({ nome: req.params.tag }, function (err, tag) {
        if (err) {
            res.send(err);
        }
        res.json(tag);
    });
};

exports.list_all_tags = function (req, res) {
    Tags.find({}, function (err, tags) {
        if(err){
            res.send(err);
        }
        res.json(tags);
    });
};
