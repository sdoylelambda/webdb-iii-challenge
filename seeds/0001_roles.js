
exports.seed = function(knex, Promise) {

  return knex('cohorts').insert([
    {name: 'ID'},
    {name: 'Name'},
    {name: 'Cohort'}
  ]);
};
