'use strict';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var tagSchema = new Schema({
    nome: { type: String }
});

tagSchema.index({ tag: 1 }, { unique: true });

tagSchema.static.findOneOrCreate = function findOneOrCreate(condition, callback) {
    const self = this;
    self.findOne(condition, (err, result) => {
        return result ? callback(err, result) : self.create(condition, (err, result) => {
            return callback(err, result)
        });
    });
}

module.exports = mongoose.model("Tags", tagSchema);