'use strict';

module.exports = function (app) {

    var usuarios = require('../controllers/usuarioController');

    var jwtMW = require('../libs/auth');

    // Usuarios Routes
    app.route('/usuarios')
        .get(jwtMW, usuarios.list_all_usuarios)
        .post(usuarios.create_a_usuario);

    app.route('/usuarios/:usrId')
        .get(jwtMW, usuarios.read_a_usuario)
        .put(jwtMW, usuarios.update_a_usuario)
        .delete(jwtMW, usuarios.delete_a_usuario);

    app.route('/usuariosByEmail/:email')
        .get(jwtMW, usuarios.read_by_email_usuario);

}