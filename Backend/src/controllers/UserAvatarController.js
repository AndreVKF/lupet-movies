const knex = require("../database/knex/knex")
const ErrorHandler = require("../utils/ErrorHandler")
const DiskStorage = require("../services/DiskStorage")

class UserAvatarController {
  update = async (req, res) => {
    const { user_id } = req.user
    const avatarFileName = req.file.filename
    const diskStorage = new DiskStorage()

    const [user] = await knex("users").where({ id: user_id })

    if (!user) {
      throw new ErrorHandler(
        "Somente usuários autenticados podem mudar o avatar!!",
        401
      )
    }

    if (user.avatar) {
      await diskStorage.deleteFile(user.avatar)
    }

    const filename = await diskStorage.saveFile(avatarFileName)
    user.avatar = filename

    await knex("users")
      .update(user)
      .where({ id: user_id }, ["id", "name", "email", "avatar"])

    const { id, name, email, avatar } = user

    return res.json({ id, name, email, avatar })
  }
}

module.exports = UserAvatarController
