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
//?? returns all students for the cohort with the specified id.
  router.get('/:id.students', (req, res) => {
    const { id } = req.params;
    db('cohorts').where({ id })
    .then(records => res.json(records))
    .catch(err => res.status(500).json(err))
  });

  router.post('/', (req, res) => {
    const role = req.body;
    if(role.name && role.name.length) {
      db('cohorts').insert(roles)
      .then(name => res.status(201).json(name))
      .catch(err => res.status(500).json(err))
    } else {
      res.status(400).json({error: 'Error'})
    }
  });

  router.put('/:id', (req, res) => {
    const { id } = req.params;
    const role = req.body;
    db('cohorts').where({ id }).update(role)
    .then(count => res.json({ count }))
    .catch(err => req.status(500).json(err))
  })


  router.delete('/:id', (req, res) => {
    const { id } = req.params;
      db('cohorts').where({ id }).del()
      .then(count => res.json({count}))
      .catch(err => res.status(500).json(err))
  });

  module.exports = router;