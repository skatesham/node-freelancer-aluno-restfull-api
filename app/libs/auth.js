'use strict';

var exjwt = require('express-jwt');
var dotenv = require('dotenv');

// LOAD ENV CONFIGS
dotenv.config();

const config = { 
    secret: process.env.JWT_SECRET,
    algorithm: 'RS256',
    exp: 3600
 };

 var jwtMW = exjwt(config);
//exports.jwtMW = exjwt(config);
module.exports = jwtMW;