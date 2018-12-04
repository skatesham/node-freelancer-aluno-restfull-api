// SERVER NODE EXPRESS
// Dependencias externas
var express = require('express');
var mongoose = require('mongoose');
bodyParser = require('body-parser');
var cors = require('cors');
var dotenv = require('dotenv');
var helmet = require('helmet');

// Dependencias Locais
var Usuario = require('./app/models/usuarioModel');
var Tag = require('./app/models/tagModel');
var Pedido = require('./app/models/pedidoModel');
var Proposta = require('./app/models/PropostaModel');


// Routes
var routesTag = require('./app/routes/tagRoutes');
var routesUsuario = require('./app/routes/usuarioRoutes');
var routesPedido = require('./app/routes/pedidoRoutes');
var routesPropostas = require('./app/routes/propostaRoutes');

// Security
var routesAuth = require('./app/routes/authRoutes');
var jwtMW = require('./app/libs/auth')

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

app.use(bodyParser.json({ limit: "500kb", type:'application/json'}));
app.use(bodyParser.urlencoded({ extended: true, limit: '500kb' }));
app.use(bodyParser.json());
app.use(helmet());
//app.use(cors({ origin: true }));
app.use(cors());

// Ativando Rotas
routesUsuario(app);
routesTag(app);
routesPedido(app);
routesPropostas(app);

// Set Security
routesAuth(app);

// Ativando Servidor
app.listen(port);
console.log('Freelancer Aluno RESTful API server disponível em: http://localhost:' + port);