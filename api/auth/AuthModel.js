/* สําหรับเชื่อมต่อ Database */
const knex = require('../../knex')

class AuthModel {

  register(username, password, fname, lname, age) {
    return knex('user_tbl')
      .insert({ username, password, fname, lname, age })
  }

  getUserFromUsername(username) {
    return knex('user_tbl')
      .first('password', 'user_id', 'fname', 'lname', 'age')
      .where({ username })
  }

}

module.exports = new AuthModel()