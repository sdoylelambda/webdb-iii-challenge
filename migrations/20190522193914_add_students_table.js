
exports.up = function(knex, Promise) {
    return knex.schema.createTable('cohort', table => {
          table.increments();
          table.string('name').notNullable();
          // create foreign key
          table.integer('role_id')
          .unsigned()
          .references('id')
          .inTable('roles')
          .onDelete('CASCADE')
          .onUpdate('CASCADE');
          table.timestamps(true, true);
      })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('cohort');
  };
  