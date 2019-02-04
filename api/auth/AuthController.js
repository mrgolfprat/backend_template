/* สําหรับสร้าง Controller */

const { success, failed } = require('../../config/response')
const { set_cookie, remove_cookie } = require('../../config/cookie_action')
const AuthModel = require('./AuthModel')
const bcrypt = require('bcrypt')

class AuthController {

  async register(req, res) {
    try {
      const { username, password, fname, lname, age } = req.body
      const hashPassword = await bcrypt.hash(password, 10)
      await AuthModel.register(username, hashPassword, fname, lname, age)
      success(res, 'register success')

    } catch (error) {
      failed(res, 'register failed')
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body
      const userData = await AuthModel.getUserFromUsername(username)
      // เช็คว่ามี username จริงมั้ย
      if (!userData) {
        return failed(res, 'username or password invalid')
      }
      // ดึงค่า password
      const { password: hashPassword, ...result } = userData
      // เช็คพาสเวิร์ดว่าตรงมั้ย
      const checkPassword = await bcrypt.compare(password, hashPassword)
      if (!checkPassword) {
        return failed(res, 'username or password invalid')
      }

      set_cookie(req, { user_id: userData.user_id })
      success(res, result)

    } catch (error) {
      failed(res, 'login failed')
    }
  }

  logout(req, res) {
    remove_cookie(req)
    success(res, 'logout success')
  }

}

module.exports = new AuthController()