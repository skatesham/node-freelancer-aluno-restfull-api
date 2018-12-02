'use strict';

module.exports = function (app) {

    var auth = require('../controllers/authController');

    var jwtMW = require('../libs/auth');

    // LOGIN ROUTE
    app.route('/login')
        .post(auth.login);

    app.get('/isLoggedIn', jwtMW.jwtMW, auth.is_logged_in);

    // Error handling 
    app.use(auth.error_handler);


};