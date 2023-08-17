/*
  index - GET para listar registros
  show - GET para exibir registro específico
  create - POST para criar um registro
  update - PUT para atualizar um registro
  delete - DELETE para remover um registro
*/
const knex = require("../database/knex/knex")

class TagsController {
  index = async (req, res) => {
    const tags = await knex("tags")

    return res.json(tags)
  }
}

module.exports = TagsController
