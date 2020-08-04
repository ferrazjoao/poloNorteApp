exports.up = function (knex) {
    return knex.schema.createTable('customers', (table) => {
        table.increments();
        table.string('name').notNull();
        table.string('document_number', 14 ).notNull().unique();
        table.timestamps();
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable('customers');
};
