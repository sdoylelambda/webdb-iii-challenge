const knex = require('knex');
const router = require('express').Router();

const config = {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/lambda.sqlite3'
    },
    debug: true
  }

  router.get
  
  router.post

  router.delete

  module.exports = router;