const moment = require('moment');
const tableName = 'users';
const now = moment().toDate();
const { encryptPassword } = require('../src/utils/encrypt');

exports.seed = async function (knex) {
  const { salt, encryptedPassword } = encryptPassword('1234')

  await knex(tableName).del();
  return knex(tableName).insert({
    name: 'Joao Ferraz',
    email: 'jfj@outlook.com',
    cpf: '38007035800',
    password: encryptedPassword,
    salt: salt,
    created_at: now,
    updated_at: now,
  });
};
