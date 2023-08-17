/*
  index - GET para listar registros
  show - GET para exibir registro específico
  create - POST para criar um registro
  update - PUT para atualizar um registro
  delete - DELETE para remover um registro
*/

const { hash, compare } = require("bcrypt")
const knex = require("../database/knex/knex")

const ErrorHandler = require("../utils/ErrorHandler")

const { BCRYPT_SALT } = require("../utils/Env")

class UserController {
  index = async (req, res) => {
    const users = await knex("users")

    return res.json(users)
  }

  show = async (req, res) => {
    const { user_id } = req.params

    const [user] = await knex("users").where({ id: user_id })

    return res.json(user)
  }

  create = async (req, res) => {
    const { name, email, password, avatar } = req.body

    // check user exists
    const userAlreadyRegistered = await this.getUserByEmail(email.toLowerCase())

    if (userAlreadyRegistered) {
      this.userAlreadyRegisteredError()
    }

    const hashedPassword = await hash(password, Number(BCRYPT_SALT))

    const user = await knex("users").insert(
      {
        name: name.toUpperCase(),
        email: email.toLowerCase(),
        password: hashedPassword,
        avatar,
      },
      ["id", "name", "email", "avatar"]
    )

    return res.json(user)
  }

  update = async (req, res) => {
    const { name, email, password, old_password, avatar } = req.body
    const { user_id } = req.user

    if (!email) {
      this.missingAttributeError("email")
    }

    if (!old_password) {
      this.missingAttributeError("old_password")
    }

    const user = await this.getUserByEmail(email.toLowerCase())

    if (!user) {
      this.userNotRegisteredError()
    }

    if (user.id !== user_id) {
      this.dataMismatch()
    }

    const isPasswordCorrect = await this.validatePassword(
      old_password,
      user.password
    )

    if (!isPasswordCorrect) {
      this.wrongPasswordError()
    }

    const newHashedPassword = await hash(password, Number(BCRYPT_SALT))

    const [updatedUser] = await knex("users").where({ id: user.id }).update(
      {
        name: name.toUpperCase(),
        email: email.toLowerCase(),
        password: newHashedPassword,
        avatar,
      },
      ["id", "name", "email", "avatar"]
    )

    return res.json(updatedUser)
  }

  delete = async (req, res) => {
    const { email, password } = req.body

    const user = await this.getUserByEmail(email.toLowerCase())

    if (!user) {
      this.userNotRegisteredError()
    }

    const isPasswordCorrect = await this.validatePassword(
      password,
      user.password
    )

    if (!isPasswordCorrect) {
      this.wrongPasswordError()
    }

    await knex("users").where({ id: user.id }).del()

    return res.json({ message: "User successufully deleted!!" })
  }

  // utils

  // arrow functions doesn't require binding
  userNotRegisteredError = () => {
    throw new ErrorHandler("Usuário não cadastrado!!", 400)
  }

  userAlreadyRegisteredError = () => {
    throw new ErrorHandler("Usuário já cadastrado!!", 400)
  }

  wrongPasswordError = () => {
    throw new ErrorHandler("Email e/ou password incorretos :(")
  }

  dataMismatch = () => {
    throw new ErrorHandler("Dados inconsistentes do usuário!!", 500)
  }

  missingAttributeError = (attributeName) => {
    throw new ErrorHandler(`Faltam atributos obrigatórios: ${attributeName}!!`)
  }

  getUserByEmail = async (email) => {
    const [user] = await knex("users").where({ email })

    return user
  }

  validatePassword = async (reqPassword, dbPassword) => {
    const isPasswordCorrect = await compare(reqPassword, dbPassword)

    return isPasswordCorrect
  }
}

module.exports = UserController
