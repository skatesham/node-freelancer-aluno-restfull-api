'use strict';

module.exports = function (app) {

    var auth = require('../controllers/authController');

    var jwtMW = require('../libs/auth');

    app.route('/')
        .get(auth.home);

    // LOGIN ROUTE
    app.route('/login')
        .post(auth.login);

    app.get('/isLoggedIn', jwtMW, auth.is_logged_in);

    // Error handling 
    app.use(auth.error_handler);


};