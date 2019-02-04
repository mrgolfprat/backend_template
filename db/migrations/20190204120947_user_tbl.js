const knex = require('../../knex')

exports.up = function (_, Promise) {
  return Promise.resolve(knex.schema.createTable('user_tbl', table => {

    table.increments('user_id').primary()
    table.string('fname', 60)
    table.string('lname', 60)
    table.integer('age')
    table.string('username', 60)
    table.string('password', 60)

    table.unique(['username'])

    table.timestamp('date').defaultTo(knex.fn.now())

  }))
};

exports.down = function (_, Promise) {
  return Promise.resolve(knex.schema.dropTable('user_tbl'))
};
