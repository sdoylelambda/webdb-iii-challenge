const express = require('express');
const helmet = require('helmet');

const Router = require('../cohort/cohortRouter');

const server = express();

server.use(helmet());
server.use(express.json());
server.use('api/cohorts', Router);

module.exports = server;