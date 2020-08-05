exports.up = function (knex) {
  return knex.schema.createTable('stores', (table) => {
    table.increments();
    table.string('name').notNull();
    table
      .integer('customer_id')
      .notNull()
      .references('customers.id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable('stores');
};
