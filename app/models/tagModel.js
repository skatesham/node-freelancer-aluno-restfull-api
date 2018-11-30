'use strict';

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var tagSchema = new Schema({
    tag: { type: String }
});

tagSchema.index({ tag: 1 }, { unique: true });

module.exports = mongoose.model("Tags", tagSchema);