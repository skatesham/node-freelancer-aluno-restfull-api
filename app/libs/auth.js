'use strict';

var exjwt = require('express-jwt');

const config = { 
    secret: process.env.JWT_SECRET || '33FF38FF973A7A45E1029AC48D7FC58CF8609E3012543AAA2EC31D36DF6498B9',
    requestProperty: 'auth',
    exp: "3600"
 };

exports.jwtMW = exjwt(config);