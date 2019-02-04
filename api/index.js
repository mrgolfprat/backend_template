const auth = require('./auth/AuthRoute')

module.exports = (app, version) => {
  app.use(version + '/auth', auth)

}