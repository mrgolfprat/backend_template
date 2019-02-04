const randomstring = require("randomstring");
const path = require('path')
const multer = require('multer')

const destination = path.join(__dirname, '..', 'public')

const storage = multer.diskStorage({
  destination,
  filename(req, file, cb) {
    if (!file.originalname.match(/\.(png|jpg|jpeg|pdf)$/ig)) {
      cb(new Error('Only pdf and image files are allowed'))
    } else {
      const file_name = `${randomstring.generate(10)}.${file.mimetype.split('/')[1]}`
      cb(null, file_name);
    }
  },
})

module.exports = multer({ storage });