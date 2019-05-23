// runs on 'knex migrate:latest
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cohort', table => {
      table.increments();
      table.string('name', 256).notNullable().unique();
      table.timestamps(true, true)
    })
  };
  // runs on 'knex migrate:rollback
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cohort')
  };
  