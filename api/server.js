const express = require('express');
const helment = require('helmet');

const Router = require('..//');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('', Router);

module.exports = server;