const bcrypt = require('bcryptjs')

module.exports = {
  register: async (req, res) => {
    const db = req.app.get('db')

    const { username, email, password } = req.body

    const [user] = await db.check_user([username])

    if (user) {
      return res.status(409).send('User already exists')
    }

    const salt = bcrypt.genSaltSync(10)

    const hash = bcrypt.hashSync(password, salt)

    const [newUser] = await db.register_user([username, email, hash])

    req.session.user = newUser

    res.status(200).send(req.session.user)
  },

  login: async (req, res) => { },

  logout: (req, res) => { },

  getUser: (req, res) => { },


}