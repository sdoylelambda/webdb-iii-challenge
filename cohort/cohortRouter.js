const knex = require('knex');
const router = require('express').Router();

const config = {
  client: 'sqlite3',
  useNullAsDefault: true,
  connection: {
    filename: './data/lambda.db3'
  },
  debug: true
}

const db = knex(config)
 
  router.get('/', (req, res) => {
      db('cohorts').then(records => res.status(201).json(records))
      .catch(err => res.status(500).json(err))
  });

  router.get('/:id', (req, res) => {
    const { id } = req.params;
    db('cohorts').where({ id })
    .then(records => res.json(records))
    .catch(err => res.status(500).json(err))
  });
  
  router.post

  router.delete

  module.exports = router;