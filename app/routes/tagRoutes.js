'use strict';

module.exports = function (app) {

    var tags = require('../controllers/tagController');

    var jwtMW = require('../libs/auth');

    app.route('/tags')
        .get(tags.list_all_tags);

    app.route('/tag/:tagId')
        .get(tags.get_a_tag);

    app.route('/tags/:tag')
        .get(tags.get_or_create);

}
