'use strict';

module.exports = function (app) {

    var tags = require('../controllers/tagController');

    app.route('/tags')
        .get(tags.list_all_tags);

    app.route('/tags/:tag')
        .get(tags.get_or_create);

}
