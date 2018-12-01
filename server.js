// SERVER NODE EXPRESS
// Dependencias externas
var express = require('express');
var mongoose = require('mongoose');
bodyParser = require('body-parser');
var cors = require('cors');
var dotenv = require('dotenv');
// Dependencias Locais
var Usuario = require('./app/models/usuarioModel');
var Tag = require('./app/models/tagModel');

var routesTag = require('./app/routes/tagRoutes');
var routesUsuario = require('./app/routes/usuarioRoutes');

// LOAD ENV CONFIGS
dotenv.config();

// Configurando Banco de Dados
mongoOptions = { 
    useNewUrlParser: true,
    useCreateIndex: true
};
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB, mongoOptions);
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error: '+err);
    process.exit(1);
});

//Configurando Servidor
port = process.env.PORT || 3000;
app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: true }));
routesUsuario(app);
routesTag(app);
app.listen(port);
console.log('Freelancer Aluno RESTful API server disponível em: http://localhost:' + port);