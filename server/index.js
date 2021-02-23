require('dotenv').config()
// const path = require('path')
const express = require('express')
const massive = require('massive')
const session = require('express-session')

const authCtrl = require('./Controllers/authController')



const app = express()

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env

app.use(express.json())
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 }
  })
)

//endpoints
app.post('auth/register', authCtrl.register)
app.post('auth/login', authCtrl.login)
app.delete('auth/logout', authCtrl.logout)
app.get('auth/getuser', authCtrl.getUser)

app.get('auth/random', authCtrl.random)


massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
}).then(dbInstance => {
  app.set('db', dbInstance)
  console.log('What it do DB')
  app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))
})