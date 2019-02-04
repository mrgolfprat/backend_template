const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')

const path = require('path')

const app = express()
const version = '/api/v1'
const port = process.env.PORT || 3108

// cors
const whitelist = [
  "http://localhost:3000",
  undefined,
  "chrome-extension://fhbjgbiflinjbdggehcddcbncdddomop"
]

const corsOption = {
  origin: (origin, cb) => {
    console.log('origin ', origin)
    if (whitelist.indexOf(origin) !== -1) {
      cb(null, true)
    } else {
      cb(new Error('Not allowed by CORS'))
    }
  },
  optionsSuccessStatus: 200,
  preflightContinue: true,
  credentials: true
}

app.use(cors(corsOption))

// set body parser
app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }))
app.use(bodyParser.json({ limit: '50mb' }))

// set cookie
app.enable('trust proxy')
app.use(cookieSession({
  name: '_cf',
  keys: ['eiei'],
  maxAge: 8 * 30 * 24 * 60 * 60 * 1000,
  secure: false,
  httpOnly: true
}))

// serve static file
app.use(version + '/static', express.static(path.join(__dirname, 'public')))

app.listen(port, () => console.log('listenning at port ', port))

const createApi = require('./api/index')
createApi(app, version)


