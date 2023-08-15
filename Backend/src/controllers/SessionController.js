const knex = require("../database/knex/knex")
const ErrorHandler = require("../utils/ErrorHandler")

const { compare } = require("bcrypt")
const { sign } = require("jsonwebtoken")
const { jwtConfig } = require("../configs/auth")

class SessionController {
  async create(req, res) {
    const { email, password } = req.body

    const [user] = await knex("users")
      .where({ email: email.toLowerCase() })
      .select("name", "email", "avatar")

    if (!user) {
      throw new ErrorHandler("Email or password incorrect!!")
    }

    const passwordMatched = await compare(password, user.password)

    if (!passwordMatched) {
      throw new ErrorHandler("Email or password incorrect!!")
    }

    const { secret, expiresIn } = jwtConfig
    const token = sign({ userId: user.id }, secret, { expiresIn })

    const date = new Date()
    const expiresDt = new Date(date.setDate(date.getDate() + 1))

    return res.json({
      user,
      token,
      expiresDt: expiresDt.toLocaleString("pt-BR"),
    })
  }
}

module.exports = SessionController
