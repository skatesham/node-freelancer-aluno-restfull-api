// SERVER NODE EXPRESS
// Dependencias externas
var express = require('express');
var mongoose = require('mongoose');
bodyParser = require('body-parser');
var cors = require('cors');
// Dependencias Locais
var Usuario = require('./app/models/usuarioModel');
var routes = require('./app/routes/usuarioRoutes');


// Configurando Banco de Dados
mongoURI = "mongodb://localhost/freelancer";
mongoOptions = { useNewUrlParser: true };
mongoose.Promise = global.Promise;
mongoose.connect(mongoURI, mongoOptions);
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error: ${err}');
    process.exit(1);
});

//Configurando Servidor
port = process.env.PORT || 3000;
app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));
routes(app);
app.listen(port);
console.log('Freelancer Aluno RESTful API server disponível em: http://localhost:' + port);