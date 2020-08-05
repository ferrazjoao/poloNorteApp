exports.up = function (knex) {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.string('name').notNull();
        table.string('email').notNull().unique();
        table.string('cpf', 11).notNull().unique();
        table.string('salt').notNull();
        table.string('password').notNull();
        table.timestamps();
    });
}

exports.down = function (knex) {
    return knex.schema.dropTable('users');
};