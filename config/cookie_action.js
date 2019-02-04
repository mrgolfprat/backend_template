
exports.set_cookie = (req, payload) => {
  req.session = payload
}

exports.remove_cookie = (req) => {
  req.session = null
}
