'use strict';

module.exports = function (app) {

    var usuarios = require('../controllers/usuarioController');

    // Usuarios Routes
    app.route('/usuarios')
        .get(usuarios.list_all_usuarios)
        .post(usuarios.create_a_usuario);

    app.route('/usuarios/:usrId')
        .get(usuarios.read_a_usuario)
        .put(usuarios.update_a_usuario)
        .delete(usuarios.delete_a_usuario);

    app.route('/usuariosByEmail/:email')
        .get(usuarios.read_by_email_usuario);

}