
exports.seed = function(knex, Promise) {

  return knex('table_name').insert([
    {name: 'ID'},
    {name: 'Name'},
    {name: 'Cohort'}
  ]);
};
