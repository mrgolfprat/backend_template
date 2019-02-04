// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql2',
    connection: {
      host: '',
      user: '',
      password: '',
      database: ''
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  },

  production: {
    client: 'mysql',
    connection: {
      host: '',
      user: '',
      password: '',
      database: ''
    },
    migrations: {
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  }

};
